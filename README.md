<style>
table{
    width: 100%;
}
th,
td{
    white-space: nowrap;
}
th:last-child,
td:last-child{
    white-space: wrap;
    width: 100%;
}
</style>

# ebe-templates


## 檔案項目說明

### 樣板檔案
| 資料夾 | 內容 | 額外資源引用
|-|-|-|
| <code>--                  | all page   | <code>reset.css, ebe.css ebe.js
| <code>_header.php         | header     |
| <code>_footer.php         | footer     |
|
| <code>home.php            | home       | <code>home.css
| <b>PROJECT
| <code>project-home.php    |            | <code>project.css, project.js
| <code>project-create.php  |  - create  |
| <code>project-edit.php    |  - edit    |
| <b>SURVEY
| <code>survey-create.php   |  - create  | <code>project.css, project.js
| <code>survey-edit.php     |  - edit    |
| <b>BOAT
| <code>boat-home.php       |            | <code>boat.css, boat.js
| <code>boat-add.php        |  - add     |
| <code>boat-edit.php       |  - edit    |
| <b>PORT
| <code>port-home.php       |            | <code>port.css, port.js
| <code>port-add.php        |  - add     |
| <code>port-edit.php       |  - edit    |
| <b>WINDFIELD
| <code>windfield-home.php  |            | <code>windfield.css, windfield.js
| <code>windfield-add.php   |  - add     |
| <code>windfield-edit.php  |  - edit    |

### SCSS / CSS 檔案

## 資料夾結構說明

| 資料夾 | 內容 |
|-|-|
| <code>/assets/img         | 版面用靜態圖片檔
| <code>/assets/scss        | CSS 開發檔案 (SCSS)
| <code>/assets/css/ebe     | 編譯後的 CSS 檔案
| <code>/assets/js/ebe      | JS 檔案
| <code>/assets/libs        | 其他外部 include 項目

## Library 使用說明

| 資料夾 | 名稱 | 內容 |
|-|-|-|
| <code>/assets/libs/jquery | jQuery 3     |
| <code>/assets/libs/fa5    | FontAwsome 5 | Icon Font