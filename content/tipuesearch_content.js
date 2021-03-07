var tipuesearch = {"pages": [{'title': 'About', 'text': 'Repository:  https://github.com/mdecourse/cmstemplate \n Github Pages:  https://mde.tw/cmstemplate \n 目前的 cmsimde 在編輯器下方新增一個 csave 按鈕, 意即 collabrative save, 當動態網際管理系統在多人同時維護登入維護網頁內容時, 編輯各頁面時段, 該頁面可能已經改版, 因此使用 csave 按鈕存檔時, 會導入當下最新的該頁面內容, 並試圖與編輯中的頁面內容進行合併. \n 使用 csave 按鈕存檔無法刪除頁面資料. \n 使用 Edit All 模式, 無法使用 csave 按鈕（尚未測試). \n', 'tags': '', 'url': 'About.html'}, {'title': 'CMSiMDE', 'text': 'CMSiMDE ( https://github.com/mdecourse/cmsimde ) 是一套以 Python 與 Flask 框架編寫的網際內容管理系統, \n 使用 CMSiMDE 建議使用者安裝 flask flask_cors bs4 lxml pelican markdown leo 等模組. 其中的 flask flask_cors bs4 lxml pelican markdown為啟動 CMSiMDE 的必要模組, 而 leo 則是 CMSMDE 開發者所使用的大綱管理工具, 可以用於與 CMSiMDE 整合的 Pelican blog 及 Reveal.js 網際簡報編輯之用. \n', 'tags': '', 'url': 'CMSiMDE.html'}, {'title': 'Gitlab 同步', 'text': '利用 git remote add gitlab  https://gitlab.com/user/repository.git  可以在近端倉儲中的 .git/config 中新增一個名稱為 gitlab, 且與  https://gitlab.com/user/repository.git  倉儲對應的設定. 使用者可以將此倉儲改版內容以 git push gitlab 推向 Gitlab. \n 至於 Gitlab Pages 額外需要下列 .yml 檔案進行轉換設定: \n .gitlab-ci.yml \n pages:\n  stage: deploy\n  script:\n  - mkdir .public\n  - cp -r * .public\n  - mv .public public\n  artifacts:\n    paths:\n    - public\n  only:\n  - master\nvariables:\n  GIT_SUBMODULE_STRATEGY: recursive \n', 'tags': '', 'url': 'Gitlab 同步.html'}, {'title': 'Heroku 部署', 'text': '與 Heroku 部署有關資訊請參考:  https://mde.tw/cp2020/content/Heroku.html', 'tags': '', 'url': 'Heroku 部署.html'}, {'title': 'Fossil SCM', 'text': '在 Github 之外, 可以同步將各倉儲資料存放至 Gitlab, Heroku (有 500 MB 容量限制) 與 Fossil SCM. \n 希望整合 Github 與 Fossil SCM 倉儲步驟說明如下: \n 針對 Github 中已經有  https://github.com/mdecourse/cmstemplate  倉儲, 希望同步建  https://fossil.kmol.info/cmstemplate  與之內容同步. \n 登入 fossil.kmol.info 主機, 在 /home/user/repository 目錄中, 以 fossil init cmstemplate.fossil 建立空倉儲. 此時 Fossil SCM 將會列出以登入帳號作為帳號的管理者密碼. \n 管理者利用  https://fossil.kmol.info/cmstemplate  連結, 以 user 登入, 並利用上列管理者密碼進入管理區, 先行透過 Setup/users 變更 user 對應密碼. \n 回到 Windows 以  fossil clone https://user@fossil.kmol.info/cmstemplate cmstemplate.fossil  取下倉儲資料, 過程中將需要輸入與 user 對應的密碼, 並被詢問是否儲存密碼, 若選擇儲存密碼則隨後的 fossil commit 將回自動提交推送. \n 接著在近端必須開啟空 cmstemplate.fossil 倉儲, 主要目的是取得 __FOSSIL__, 並且以 git pull 完整拉下位於  https://github.com/mdecourse/cmstemplate  中的資料並與空 __FOSSIL__ 進行整合. 其中在 Fossil SCM 端必須將 Setup/Settings 中的 default-csp 設為:  https://fonts.googleapis.com  (讓 CMSiMDE 靜態網頁可以在 Fossil SCM doc 頁面中正常顯示), 且勾選 dotfiles (讓 Fossil SCM 可以儲存 .git 中的版本資料). \n \n 參考資料: \n 編譯 Fossil SCM: \n \xa0 http://project.mde.tw/blog/zai-msys2-huan-jing-bian-yi-fossil-scm.html', 'tags': '', 'url': 'Fossil SCM.html'}, {'title': '建立網頁', 'text': '由於 CMSiMDE 帶有動態網頁與靜態網頁等兩個部分, 動態網頁執行時需要該伺服器能夠執行 Python 3, 以及 flask flask_cors bs4 lxml pelican markdown 等模組. 而靜態網頁的伺服則只需要 WWW Server 即可. \n 若使用者在 Github 使用 CMSiMDE 建立網頁, 可以透過  https://github.com/mdecourse/cmstemplate  template 建立, 步驟與兩種設定方式如下: \n \n 使用者登入 Github \n 將瀏覽器連線至  https://github.com/mdecourse/cmstemplate  頁面後, 點擊 Use this template 按鈕後, 選擇所要採用的 repository 名稱後, 就可以建立以 CMSiMDE 作為子模組的 Github 倉儲. \n 假如使用者所選擇的倉儲名稱為: 帳號.github.io, 則 Github 會自動設定該倉儲的 main 分支為 Github Pages 根目錄, 意即一旦 Github Pages 完成轉檔 (提交訊息之後會出現綠勾), 則該倉儲的對應網頁將為: https://帳號.github.io \n 若使用利用  https://github.com/mdecourse/cmstemplate  作為 template 所建立的倉儲名稱並非 帳號.github.io, 則使用者必須自行至該倉儲的 settings/Github Pages 選項中將 main branch 設為 Github Pages 對應的 root 目錄. 之後, Github 將會採用: 帳號.github.io/倉儲名稱 作為與該倉儲對應的 Github Pages 網址. \n \n', 'tags': '', 'url': '建立網頁.html'}, {'title': '注意事項', 'text': '因為  https://github.com/mdecourse/cmstemplate  將 CMSiMDE 倉儲作為 submodule, 因此使用者利用 cmstemplate 作為 template 後, 必須使用 git clone --recurse-submodules 取下遠端倉儲. \n 例如: \n 若使用者的倉儲 URL 為  https://github.com/mdecourse/cmstemplate \n 則可以在近端利用: \n git clone --recurse-submodules  https://github.com/mdecourse/cmstemplate.git \n 將遠端倉儲資料存入 cmstemplate 目錄中. \n 目前的 cmstemplate 內建 cms.bat 與 acp.bat 等兩個 batch 檔案, 可以協助使用者直接在倉儲根目錄啟動 CMSiMDE 動態網頁, 以及單一指令式即可完成 git add, git commit 以及 git push, 但是前提是使用者必須設定以 ssh 方式與 Github 倉儲進行驗證. \n 例如: \n 若使用者已經將倉儲內容 clone 至近端, 且已經帶有 cmsimde 子模組的內容. \n 則可以在近端命令列進入 cmstemplate 倉儲目錄執行: \n cms.bat \n 開啟動態網頁系統. 並以  https://localhost:9443  開啟. \n 一旦完成動態網頁的編輯, 利用 Generate Pages 可以轉為靜態網站, 且各 html 檔案將位於 content 目錄中. \n 若使用者希望檢查近端靜態網頁的內容, 可以利用 SciTE 開啟倉儲中的 http-server.py, 並利用瀏覽器以  https://localhost:8444  檢查靜態網頁內容. \n 一旦使用者要將近端倉儲的動態與靜態網頁內容推向 Github, 則必須將倉儲中 .git/config 的 url, 從 https 改為 ssh 的連線格式: \n 例如: \n 原先 .git/config origin 的 url 為 url =  https://github.com/mdecourse/cmstemplate.git,  則必須改為: \n url =  git@github.com:mdecourse/cmstemplate.git \n 之後假如使用者要以 "add some files" 字串當作提交說明訊息, 則可以在命令列中的倉儲目錄執行: \n acp.bat "add some files" \n', 'tags': '', 'url': '注意事項.html'}, {'title': '標題選擇', 'text': '由於 CMSiMDE 中的動態網站透過 config/content.htm 的 H1~H3 超文件標註進行分頁, 因此使用者利用 cms.bat 開啟動態網站後, 必須注意各頁面標題文字的選擇: \n \n 頁面標題文字儘量簡短  - 頁面標題就有如文章的章節標題, 只要該標題具有該頁面內容的代表性即可, 越簡短越好. \n 頁面標題文字不要使用標點符號  - 因為標點符號中的 "/" 會造成頁面擷取時 URL 指令分段上的誤判, 至於標題文字中若有 ":" 則會在動態內容轉靜態內容時, 因 Windows 不允許檔案名稱帶有 ":" 而無法轉檔. \n 頁面標題中不可以有超文件標註  - 由於 CMSiMDE 動態網站編輯器採用 GUI 進行, 採用滑鼠標修頁面標題時, 可能無意中將 HTML 標註放入 H1~H3 標題文字中, 如此可能會造成 CMSiMDE 分頁錯誤而無法開啟動態網站. 當使用者要檢查所使用的頁面標題是否帶有 html 標註, 可以透過編輯功能中的 Source Code 檢查. \n H1 標題數量不可過多  - 由於 CMSiMDE 的靜態網站支援手機模式, 當頁面 H1 標題數量超過 10 個之後, 頁面標題可能無法在螢幕上最上方以一列顯示, 而是必須出現在第二行, 結果將會導致頁面展開時的 Javascript 程式產生錯亂, 結果為無法直接以滑鼠點擊進入特定頁面. \n \n \n \n', 'tags': '', 'url': '標題選擇.html'}, {'title': '靜態網頁 404', 'text': '當使用者將近端網頁倉儲資料推向 Github 後, commit 提交訊息之後若沒有出現綠勾, 表示靜態網頁無法轉檔成功, 這時連接靜態網頁時, 將會出現 404, 通常情況下是因為倉儲中 cmsimde 子模組的版次無法與遠端  https://github.com/mdecourse/cmsimde  中的版本對應. \n 上述靜態網頁出現 404 錯誤訊息的處理方式如下: \n \n 從  https://github.com/mdecourse/cmsimde  倉儲中複製最新版本的版次號, 以  2021/03/03 的版次 為例, 版次號為 1c3aeec1f5d26b421743d2f5ef8bb7d5b99292af, 使用者只需要最前面的 7 個字元, 也就是 1c3aeec. \n 然後在近端倉儲中, 以命令列進入 cmsimde 目錄後執行:  git checkout 1c3aeec \n 接著退回倉儲目錄, 以 git add, git commit 及 git push 將倉儲改版內容推向 Github 後應該就可以將倉儲正確轉為靜態網站內容. \n', 'tags': '', 'url': '靜態網頁 404.html'}, {'title': '動態網站錯誤', 'text': 'CMSiMDE 動態網站經常出現的錯誤是無法對 config/content.htm 分頁, 這時可以利用 SCiTE 編輯 content.htm, 找尋是否 H1~H3 標註中是否帶有特殊符號, 如 "/" 或 ":" 等. \n', 'tags': '', 'url': '動態網站錯誤.html'}, {'title': '延伸開發', 'text': '為了建立 responsive site: \n 靜態網頁: \n Javascript 程式庫: \n https://getbootstrap.com/ \n 動態系統: \n Javascript editor \n TinyMCE:  https://www.tiny.cloud/ \n Syntax highlighter:  https://prismjs.com/ \n Ajax bit by bit file uploader: \n Flask \n Flask_cors \n bs4 \n lxml \n markdown \n', 'tags': '', 'url': '延伸開發.html'}]};