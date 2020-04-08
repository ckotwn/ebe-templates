<?php

    $is_user          = false;
    $is_admin         = false;
    $has_notification = false;

    // 輸出 menu 的 html 碼
    function renderMenu( $menuItemList = [] ){
        // $reqOrig     = $_SERVER['REQUEST_URI'];
        $reqOrig     = '/';
        if( strpos( $reqOrig, "?" ) !== false ){
            $reqOrig = substr( $reqOrig, 0, strpos( $reqOrig, "?" ));
        }
        $reqPath     = implode( '/', array_filter( explode('/', $reqOrig) ) );
        $reqPathList = explode( '/', $reqPath );

        $html = '';
        foreach( $menuItemList as $url => $menuItem ){
            $sec       = $menuItem['sec'];
            $label     = $menuItem['label'];
            $classList = ( $reqPath === $sec || ( $sec != '' && strpos( $reqPath, $sec ) === 0 ) )? '-active' : '';

            // adjust
            if( $sec == "project" ){
                if( count( $reqPathList ) > 1 ){
                    if( $reqPathList[1] == "download" ) $classList = "";
                }
            }

            if( $sec == "project/download" ){
                if( count( $reqPathList ) > 1 ){
                    if( $reqPathList[1] == "download" ) $classList = "-active";
                    else $classList = "";
                }
            }

            $html     .= "<a class='{$classList}' href='/{$url}'>";
            if( isset( $menuItem['icon'] ) ){
                $icon  = $menuItem['icon'];
                $html .= "<i class='fas {$icon}'></i>";
            }
            $html     .= "{$label}</a>";
        }
        return $html;
    }

?>

<div id='header'>
    <div class="captain"></div>


    <?php /* ****************************** 主目錄 */ ?>
    <nav class='mainMenu'>

        <?php if( $is_user | 1 ) : /* 已登入 */ ?>
            <?php if( $is_admin ): /* 已登入 > 管理員 */ ?>

                <div class="menuGroup -primary">
                    <?= renderMenu([
                        '' => [
                            'sec'   => '',
                            'icon'  => 'fa-map-marked',
                            'label' => '互動圖籍',
                        ],
                        'statistics' => [
                            'sec'   => 'statistics',
                            'icon'  => 'fa-clipboard-list-check',
                            'label' => '執行現況',
                        ],
                        'project/download?start_year=&end_year=' => [
                            'sec'   => 'project/download',
                            'icon'  => 'fa-analytics',
                            'label' => '統計圖表',
                        ],
                    ]);
                    ?>
                </div>

                <div class="menuGroup">
                    <?= renderMenu([
                        'project' => [
                            'sec'   => 'project',
                            'icon'  => 'fa-ballot-check',
                            'label' => '計畫',
                        ],
                        'team' => [
                            'sec'   => 'team',
                            'icon'  => 'fa-users',
                            'label' => '團隊',
                        ],
                        'port' => [
                            'sec'   => 'port',
                            'icon'  => 'fa-anchor',
                            'label' => '港口',
                        ],
                        'boat' => [
                            'sec'   => 'boat',
                            'icon'  => 'fa-ship',
                            'label' => '船舶',
                        ],
                        'windfield' => [
                            'sec'   => 'windfield',
                            'icon'  => 'fa-wind',
                            'label' => '風場',
                        ],
                    ]);
                    ?>
                </div>

            <?php else : /* 已登入 > 非管理員 */ ?>

                <div class="menuGroup -primary">
                    <?= renderMenu([
                        '' => [
                            'sec'   => '',
                            'icon'  => 'fa-map-marked',
                            'label' => '互動圖籍',
                        ],
                        'statistics' => [
                            'sec'   => 'statistics',
                            'icon'  => 'fa-clipboard-list-check',
                            'label' => '執行現況',
                        ],
                        'project/download?start_year=&end_year=' => [
                            'sec'   => 'project/download',
                            'icon'  => 'fa-analytics',
                            'label' => '統計圖表',
                        ],
                    ]);
                    ?>
                </div>

                <div class="menuGroup">
                    <?= renderMenu([
                        'project' => [
                            'sec'   => 'project',
                            'icon'  => 'fa-ballot-check',
                            'label' => '計畫',
                        ],
                        'team' => [
                            'sec'   => 'team',
                            'icon'  => 'fa-users',
                            'label' => '團隊',
                        ],
                        'port' => [
                            'sec'   => 'port',
                            'icon'  => 'fa-anchor',
                            'label' => '港口',
                        ],
                        'boat' => [
                            'sec'   => 'boat',
                            'icon'  => 'fa-ship',
                            'label' => '船舶',
                        ],
                    ]);
                    ?>
                </div>

            <?php endif; ?>
        <?php else : /* 未登入 */ ?>

            <div class="menuGroup -primary">
                <?= renderMenu([
                    '' => [
                        'sec'   => '',
                        'icon'  => 'fa-home',
                        'label' => '首頁',
                    ],
                ]);
                ?>
            </div>

        <?php endif; ?>

    </nav>


    <div class='fnBlock'>
        <?php /* ****************************** 使用者目錄 */ ?>
        <div class="userMenu fnItem">
            <div class="trayIcon">
                <?php if( $is_user ) : /* 已登入 */ ?>
                    <?php if( $is_admin ): /* 已登入 > 管理員 */ ?>
                        <i class="icon fal fa-user-hard-hat"></i>
                    <?php else : /* 已登入 > 非管理員 */ ?>
                        <i class="icon fal fa-user"></i>
                    <?php endif; ?>
                <?php else : /* 未登入 */ ?>
                    <a href="/login"><i class="icon fal fa-user"></i><div class="textlabel">登入</div></a>
                <?php endif; ?>
            </div>

            <?php if( $is_user ) : /* 已登入 */ ?>
                <div class="dropdownMenu">

                    <div class="profileCard">
                        <div class="thumb"><i class="icon fal fa-user-circle"></i></div>
                        <div class="name"><?= isset($user['info']['name']) ? $user['info']['name'] : $user['info']['last_name'].$user['info']['first_name']; ?></div>
                        <div class="email"><?= isset($user['info']['email']) ? $user['info']['email'] : ""; ?></div>
                    </div>

                    <?php if( $is_admin ): /* 已登入 > 管理員 */ ?>

                        <a href='/guidelines'><i class='fal fa-atlas'></i>操作指引</a>
                        <a href='/download'><i class='fal fa-cloud-download'></i>資源下載</a>
                        <a href='/admin/update?id=<?= $user["info"]["id"] ?>'><i class='fal fa-cog'></i>個人資料維護</a>
                        <a href='/logout'><i class='fal fa-sign-out'></i>登出</a>

                    <?php else : /* 已登入 > 非管理員 */ ?>

                        <a href='/user/team'><i class='fal fa-map-marker'></i>我的團隊</a>
                        <a href='/team/apply'><i class='fal fa-map-marker'></i>申請加入團隊</a>
                        <a href='/guidelines'><i class='fal fa-atlas'></i>操作指引</a>
                        <a href='/download'><i class='fal fa-cloud-download'></i>資源下載</a>
                        <a href='/admin/update?id=<?= $user["info"]["id"] ?>'><i class='fal fa-cog'></i>個人資料維護</a>
                        <a href='/logout'><i class='fal fa-sign-out'></i>登出</a>

                    <?php endif; ?>
                <?php endif; ?>
            </div>
        </div>

        <?php /* ****************************** 通知列 */ ?>
        <?php if( $is_user ) : /* 已登入 */ ?>
        <div class="notificationMenu fnItem <?= ($has_notification)? '-hasData':'' ?>">
            <div class="trayIcon"><i class="icon fal fa-comment-alt"></i></div>

            <div class="dropdownMenu">
                <div class="menuName">通知</div>
                <?php if( $has_notification ): ?>
                    <?php foreach( $notifications as $n ): ?>
                        <div><i class='fal fa-info-circle'></i><?= $n->note ?></div>
                    <?php endforeach; ?>
                <?php else: ?>
                    <div><i class='fal fa-empty-set'></i>目前沒有新的通知。</div>
                <?php endif; ?>
            </div>
        </div>
        <?php endif; ?>

    </div>


</div>