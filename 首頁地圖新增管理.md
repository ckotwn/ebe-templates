# 首頁地圖新增管理說明


## 1. 新增與編輯流程

1.  將圖層轉為 `GeoJSON` 格式。
2.  編輯 `圖輯` 清單檔，設定可於首頁選擇的 `圖輯清單`。


## 2. 關聯檔案

|用途|檔案路徑|說明|
|-|-|-|
|首頁圖輯清單設定|`/mapset/mapset-list.json`|設定可於首頁顯示的 `圖輯`
|圖輯設定　　　　|`/mapset/mapset-****.json`|`圖輯` 顯示設定，包含順序、圖層檔案、外觀等。
|圖層　　　　　　|`/mapset/files/*`         |`圖層` 檔案統一儲存於此。



## 3. 檔案格式

-   設定檔使用 `JSON`，編碼為 `UTF-8`，詳細定義請見後續說明。
-   圖輯圖層使用 `GeoJSON`，坐標系為 `WGS 84`，轉檔時請注意坐標系需正確。


## 4. 檔案結構

### 4.1 首頁圖輯清單設定 - `mapset-list.json`

**結構：**

    array(
        [MapSetListItem Object],
        [MapSetListItem Object],
        ...
        [MapSetListItem Object]
    )

**MapSetListItem Object**

|欄位|說明|
|--|--|
|`name`|圖輯的顯示名稱
|`file`|圖輯的檔案路徑


**檔案範例：**

    [
        {
            "name" : "2019 年觀測資料集",
            "file" : "/mapset/mapset-2019.json"
        },
        {
            "name" : "2018 年觀測資料集",
            "file" : "/mapset/mapset-2018.json"
        }
    ]


### 4.2 圖輯設定 - `mapset.json`

**結構：**

    Array(
        [LayerConfig Object],
        [LayerConfig Object],
        [LayerConfig Object],
        ...,
        [LayerConfig Object],
    )

**LayerConfig Object**

|欄位|資料類型|說明|
|--|--|--|
|`type`      |`String [layer*|group]`       |圖層類型，group 需包含一個或多個 layer
|`name`      |`String`                      |圖層名稱
|`file`      |`String`                      |圖層檔案路徑，僅用於 layer
|`graphType` |`String [polygon|path|point]` |圖層顯示方式，僅用於 layer，反應至圖層控制面板的圖示，<br>可用值為 多邊形、路徑、點，<br>
|`visible`   |`Boolean [true*|false]`       |是否預設顯示
|`style`     |`LayerStyle Object`           |圖層外觀設定
|`children`  |`Array([LayerConfig Object])` |子圖層清單

星號 (*) 標示為預設值

**LayerStyle Object**

|欄位|資料類型|說明|
|--|--|--|
|`path` |`PathConfig Object` |用於設定 多邊形 與 路徑 的外觀
|`point`|`PointConfig Object`|用於設定點的外觀

**PathConfig Object**

|欄位|資料類型|說明|
|--|--|--|
|`option`|`Object`|設定路徑外觀，參數同 `Leaflet Path Object` [說明文件↗](https://leafletjs.com/reference-1.6.0.html#path)

**PointConfig Object**

|欄位|資料類型|說明|
|--|--|--|
|`type`  |`String [circle|image]`|點的外觀類型，可使用圓點 (circle) 或是圖片 (image)
|`option`|`Object`                |設定點外觀，若為 circle type 則參數同 `Leaflet Path Object` [說明文件↗](https://leafletjs.com/reference-1.6.0.html#path)<br>若為 image type 則參數同 `Leaflet Marker` [說明文件↗](https://leafletjs.com/reference-1.6.0.html#marker)


**範例－顯示水下測站，內容為座標點，外觀為黑框淺綠色圓點顯示：**

    [
        {
            "type"      : "layer",
            "name"      : "水下聲學風場區測站(施工期)",
            "graphType" : "points",
            "file"      : "mapset/2019/St_2019_W_ITRITest_CAcoustics_pre_dev.geojson",
            "style"     : {
                "point" : {
                    "type" : "circle",
                    "option" : {
                        "radius"      : 7,
                        "stroke"      : true,
                        "weight"      : 1,
                        "color"       : "#000000",
                        "fillColor"   : "#B3D78B",
                        "fillOpacity" : 1
                    }
                }
            }
        }
    ]