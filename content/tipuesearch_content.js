var tipuesearch = {"pages": [{'title': 'About', 'text': 'HI!!!! 我是40823144 柯晉瑚 \n My Repository:  https://github.com/40823144 \n My Github Pages:  https://40823144.github.io/cd2021/content/index.html \n', 'tags': '', 'url': 'About.html'}, {'title': 'csave', 'text': '目前的 cmsimde 在編輯器下方新增一個 csave 按鈕, 意即 collabrative save, 當動態網際管理系統在多人同時維護登入維護網頁內容時, 編輯各頁面時段, 該頁面可能已經改版, 因此使用 csave 按鈕存檔時, 會導入當下最新的該頁面內容, 並試圖與編輯中的頁面內容進行合併. \n 使用 csave 按鈕存檔無法刪除頁面資料. \n 使用 Edit All 模式, 無法使用 csave 按鈕（尚未測試). \n', 'tags': '', 'url': 'csave.html'}, {'title': 'CMSiMDE', 'text': '使用 CMSiMDE 建議使用者安裝 flask flask_cors bs4 lxml pelican markdown leo 等模組. 其中的 flask flask_cors bs4 lxml pelican markdown為啟動 CMSiMDE 的必要模組, 而 leo 則是 CMSMDE 開發者所使用的大綱管理工具, 可以用於與 CMSiMDE 整合的 Pelican blog 及 Reveal.js 網際簡報編輯之用. \n 模組安裝指令為: \n pip install flask flask_cors lxml bs4 markdown pelican leo \n \n \n', 'tags': '', 'url': 'CMSiMDE.html'}, {'title': 'W2~W4', 'text': 'W2~W4為兩人一組，進行 協同題目選定討論。 \n stage1-ag17 題目：纜車 動機：因為不想走路 W2:繪製零件 W3:使用Coppeliasim模擬動作並除錯 W4:報告 \n', 'tags': '', 'url': 'W2~W4.html'}, {'title': '組員', 'text': '廖韋博 40823142 \n 倉儲： https://github.com/40823142 \n 網站： https://40823142.github.io/cd2021/content/ \n 負責部分：繪圖 \n 柯晉瑚 40823144 \n 倉儲： https://github.com/40823144 \n 網站： https://40823144.github.io/cd2021/content/ \n 負責部分：CoppeliaSim \n', 'tags': '', 'url': '組員.html'}, {'title': 'W3', 'text': '錯誤1 \n 想要讓輪子在軌道上跑，但是會滑出去。 \n \n 錯誤2 \n 想要把軌道固定住，但是都會掉下來。 \n \n 錯誤3 \n 因為輪子跟固定的物件都在同一個軸，所以下方的纜車也會跟著做旋轉，最後離開軌道。 \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W5~W9', 'text': '題目：四腳獸 \n \n 倉儲： https://github.com/40823144/stage2-ag10 \n 網站： https://40823144.github.io/stage2-ag10/content/index.html \n 簡報： https://40823144.github.io/stage2-ag10/reveal/index.html#/ \n 模擬影片： https://www.youtube.com/watch?v=6aQ9x_dSVAw&list=PL7Ho6OOT1C_Ujluv4oU9TW_a3eumcBpLV \n', 'tags': '', 'url': 'W5~W9.html'}, {'title': '組員：', 'text': '40823142 廖韋博\xa0 40823142_repo \xa0 40823142_site \n 40823144 柯晉瑚\xa0 40823144_repo \xa0 40823144_site \n 40823127 陳佑杰\xa0 40823127_repo \xa0 40823127_site \n 40823148 韋誠昌\xa0 40823148_repo \xa0 40823148_site \n 工作分配 \n 繪圖- 40823127 陳佑杰 \n 模擬- 40823142 廖韋博\xa040823148 韋誠昌 \n 討論資料統整和網站更新- 40823144 柯晉瑚 \n', 'tags': '', 'url': '組員：.html'}, {'title': 'W5', 'text': '打算先做出一隻腳來進行模擬。 \n 初步零件 \n \n plslvs模擬結果 \n \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '單腳模擬成功，再來嘗試組裝並模擬雙腳運作。 \n \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '不開碰撞後，雙腳模擬成功，但會有些許干涉，外型跟內部要大改造。 \n \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': '外型大改造並且使四足模擬成功。 \n', 'tags': '', 'url': 'W8.html'}, {'title': '成品：', 'text': '模擬影片： \n \n 零件圖： \n \n 立體圖： \n \n', 'tags': '', 'url': '成品：.html'}, {'title': 'W10~W17', 'text': '', 'tags': '', 'url': 'W10~W17.html'}, {'title': 'RoboDK', 'text': '單純的改了一 些數字，讓它可以來回。 \n \n # KMOLab Portable RoboDK pick and place\nfrom robolink import *    # API to communicate with robodk\nfrom robodk import *      # robodk robotics toolbox\n\n# Setup global parameters\nBALL_DIAMETER = 100 # diameter of one ball\nAPPROACH = 100      # approach distance to grab each part, in mm\nnTCPs = 6           # number of TCP\'s in the tool\n\n#----------------------------------------------\n# Function definitions\n\ndef box_calc(BALLS_SIDE=4, BALLS_MAX=None):\n    """Calculate a list of points (ball center) as if the balls were stored in a box"""\n    if BALLS_MAX is None: BALLS_MAX = BALLS_SIDE**3\n    xyz_list = []\n    for h in range(BALLS_SIDE):\n        for i in range(BALLS_SIDE):\n            for j in range(BALLS_SIDE):\n                xyz_list = xyz_list + [[(i+0.5)*BALL_DIAMETER, (j+0.5)*BALL_DIAMETER, (h+0.5)*BALL_DIAMETER]]\n                if len(xyz_list) >= BALLS_MAX:\n                    return xyz_list\n    return xyz_list\n\ndef pyramid_calc(BALLS_SIDE=4):\n    """Calculate a list of points (ball center) as if the balls were place in a pyramid"""\n    #the number of balls can be calculated as: int(BALLS_SIDE*(BALLS_SIDE+1)*(2*BALLS_SIDE+1)/6)\n    BALL_DIAMETER = 100\n    xyz_list = []\n    sqrt2 = 2**(0.5)\n    for h in range(BALLS_SIDE):\n        for i in range(BALLS_SIDE-h):\n            for j in range(BALLS_SIDE-h):\n                height = h*BALL_DIAMETER/sqrt2 + BALL_DIAMETER/2\n                xyz_list = xyz_list + [[i*BALL_DIAMETER + (h+1)*BALL_DIAMETER*0.5, j*BALL_DIAMETER + (h+1)*BALL_DIAMETER*0.5, height]]\n    return xyz_list\n\ndef balls_setup(frame, positions):\n    """Place a list of balls in a reference frame. The reference object (ball) must have been previously copied to the clipboard."""\n    nballs = len(positions)\n    step = 1.0/(nballs - 1)\n    for i in range(nballs):\n        newball = frame.Paste()\n        newball.setName(\'ball \' + str(i)) #set item name\n        newball.setPose(transl(positions[i])) #set item position with respect to parent\n        newball.setVisible(True, False) #make item visible but hide the reference frame\n        newball.Recolor([1-step*i, step*i, 0.2, 1]) #set RGBA color\n\ndef cleanup_balls(parentnodes):\n    """Delete all child items whose name starts with \\"ball\\", from the provided list of parent items."""\n    todelete = []\n    for item in parentnodes:\n        todelete = todelete + item.Childs()\n\n    for item in todelete:\n        if item.Name().startswith(\'ball\'):\n            item.Delete()\n\ndef TCP_On(toolitem, tcp_id):\n    """Attach the closest object to the toolitem Htool pose,\n    furthermore, it will output appropriate function calls on the generated robot program (call to TCP_On)"""\n    toolitem.AttachClosest()\n    toolitem.RDK().RunMessage(\'Set air valve %i on\' % (tcp_id+1))\n    toolitem.RDK().RunProgram(\'TCP_On(%i)\' % (tcp_id+1));\n        \ndef TCP_Off(toolitem, tcp_id, itemleave=0):\n    """Detaches the closest object attached to the toolitem Htool pose,\n    furthermore, it will output appropriate function calls on the generated robot program (call to TCP_Off)"""\n    toolitem.DetachAll(itemleave)\n    toolitem.RDK().RunMessage(\'Set air valve %i off\' % (tcp_id+1))\n    toolitem.RDK().RunProgram(\'TCP_Off(%i)\' % (tcp_id+1));\n\n\n#----------------------------------------------------------\n# The program starts here:\n\n# Any interaction with RoboDK must be done through RDK:\nRDK = Robolink(robodk_path="C:/robodk/bin/RoboDK.exe", robodk_ip=\'127.0.0.1\')\n\n# Turn off automatic rendering (faster)\nRDK.Render(False)\n\n#RDK.Set_Simulation_Speed(500); # set the simulation speed\n\n# Gather required items from the station tree\nrobot = RDK.Item(\'Fanuc M-710iC/50\')\nrobot_tools = robot.Childs()\n#robottool = RDK.Item(\'MainTool\')\nframe1 = RDK.Item(\'Table 1\')\nframe2 = RDK.Item(\'Table 2\')\n\n# Copy a ball as an object (same as CTRL+C)\nballref = RDK.Item(\'reference ball\')\nballref.Copy()\n\n# Run a pre-defined station program (in RoboDK) to replace the two tables\nprog_reset = RDK.Item(\'Replace objects\')\nprog_reset.RunProgram()\n\n# Call custom procedure to remove old objects\ncleanup_balls([frame1, frame2])\n\n# Make a list of positions to place the objects\nframe1_list = pyramid_calc(4)\nframe2_list = pyramid_calc(4)\n\n# Programmatically place the objects with a custom-made procedure\nballs_setup(frame1, frame1_list)\n\n# Delete previously generated tools\nfor tool in robot_tools:\n    if tool.Name().startswith(\'TCP\'):\n        tool.Delete()\n        \n# Calculate tool frames for the suction cup tool of 6 suction cups\nTCP_list = []\nfor i in range(nTCPs):\n    TCPi_pose = transl(0,0,100)*rotz((360/nTCPs)*i*pi/180)*transl(125,0,0)*roty(pi/2)\n    TCPi = robot.AddTool(TCPi_pose, \'TCP %i\' % (i+1))\n    TCP_list.append(TCPi)\n\nTCP_0 = TCP_list[0]\n\n# Turn on automatic rendering\nRDK.Render(True)\n\n# Move balls    \nrobot.setPoseTool(TCP_list[0])\nnballs_frame1 = len(frame1_list)\nnballs_frame2 = len(frame2_list)\nidTake = nballs_frame1 - 1\nidLeave = 0\nidTCP = 0\ntarget_app_frame = transl(2*BALL_DIAMETER, 2*BALL_DIAMETER, 4*BALL_DIAMETER)*roty(pi)*transl(0,0,-APPROACH)\n\nwhile idTake >= 0:\n    # ------------------------------------------------------------------\n    # first priority: grab as many balls as possible\n    # the tool is empty at this point, so take as many balls as possible (up to a maximum of 6 -> nTCPs)\n    ntake = min(nTCPs, idTake + 1)\n\n    # approach to frame 1\n    robot.setPoseFrame(frame1)\n    robot.setPoseTool(TCP_0)\n    robot.MoveJ([0,0,0,0,10,-200])\n    robot.MoveJ(target_app_frame)\n\n    # grab ntake balls from frame 1\n    for i in range(ntake):\n        TCPi = TCP_list[i]\n        robot.setPoseTool(TCPi)\n        # calculate target wrt frame1: rotation about Y is needed since Z and X axis are inverted\n        target = transl(frame1_list[idTake])*roty(pi)*rotx(30*pi/180)\n        target_app = target*transl(0,0,-APPROACH)\n        idTake = idTake - 1        \n        robot.MoveL(target_app)\n        robot.MoveL(target)\n        TCP_On(TCPi, i)\n        robot.MoveL(target_app)\n \n    # ------------------------------------------------------------------\n    # second priority: unload the tool     \n    # approach to frame 2 and place the tool balls into table 2\n    robot.setPoseTool(TCP_0)\n    robot.MoveJ(target_app_frame)\n    robot.MoveJ([0,0,0,0,10,-200])\n    robot.setPoseFrame(frame2)    \n    robot.MoveJ(target_app_frame)\n    for i in range(ntake):\n        TCPi = TCP_list[i]\n        robot.setPoseTool(TCPi)\n        if idLeave > nballs_frame2-1:\n            raise Exception("No room left to place objects in Table 2")\n        \n        # calculate target wrt frame1: rotation of 180 about Y is needed since Z and X axis are inverted\n        target = transl(frame2_list[idLeave])*roty(pi)*rotx(30*pi/180)\n        target_app = target*transl(0,0,-APPROACH)\n        idLeave = idLeave + 1        \n        robot.MoveL(target_app)\n        robot.MoveL(target)\n        TCP_Off(TCPi, i, frame2)\n        robot.MoveL(target_app)\n\n    robot.MoveJ(target_app_frame)\n\n# Move home when the robot finishes\nrobot.MoveJ([0,0,0,0,10,-200])\n\n\n\n# Gather required items from the station tree\nrobot = RDK.Item(\'Fanuc M-710iC/50\')\nrobot_tools = robot.Childs()\n#robottool = RDK.Item(\'MainTool\')\nframe1 = RDK.Item(\'Table 1\')\nframe2 = RDK.Item(\'Table 2\')\n\n\n\n# Call custom procedure to remove old objects\ncleanup_balls([frame1 , frame2])\n\n\n# Make a list of positions to place the objects\nframe1_list = pyramid_calc(4)\nframe2_list = pyramid_calc(4)\n\n# Programmatically place the objects with a custom-made procedure\nballs_setup(frame2, frame2_list)\n\n# Delete previously generated tools\nfor tool in robot_tools:\n    if tool.Name().startswith(\'TCP\'):\n        tool.Delete()\n        \n# Calculate tool frames for the suction cup tool of 6 suction cups\nTCP_list = []\nfor i in range(nTCPs):\n    TCPi_pose = transl(0,0,100)*rotz((360/nTCPs)*i*pi/180)*transl(125,0,0)*roty(pi/2)\n    TCPi = robot.AddTool(TCPi_pose, \'TCP %i\' % (i+1))\n    TCP_list.append(TCPi)\n\nTCP_0 = TCP_list[0]\n\n\n\n# Move balls    \nrobot.setPoseTool(TCP_list[0])\nnballs_frame2 = len(frame2_list)\nnballs_frame1 = len(frame1_list)\nidTake = nballs_frame2 - 1\nidLeave = 0\nidTCP = 0\ntarget_app_frame = transl(2*BALL_DIAMETER, 2*BALL_DIAMETER, 4*BALL_DIAMETER)*roty(pi)*transl(0,0,-APPROACH)\n\nwhile idTake >= 0:\n    # ------------------------------------------------------------------\n    # first priority: grab as many balls as possible\n    # the tool is empty at this point, so take as many balls as possible (up to a maximum of 6 -> nTCPs)\n    ntake = min(nTCPs, idTake + 1)\n\n    # approach to frame 1\n    robot.setPoseFrame(frame2)\n    robot.setPoseTool(TCP_0)\n    robot.MoveJ([0,0,0,0,10,-200])\n    robot.MoveJ(target_app_frame)\n\n    # grab ntake balls from frame 1\n    for i in range(ntake):\n        TCPi = TCP_list[i]\n        robot.setPoseTool(TCPi)\n        # calculate target wrt frame1: rotation about Y is needed since Z and X axis are inverted\n        target = transl(frame2_list[idTake])*roty(pi)*rotx(30*pi/180)\n        target_app = target*transl(0,0,-APPROACH)\n        idTake = idTake - 1        \n        robot.MoveL(target_app)\n        robot.MoveL(target)\n        TCP_On(TCPi, i)\n        robot.MoveL(target_app)\n \n    # ------------------------------------------------------------------\n    # second priority: unload the tool     \n    # approach to frame 2 and place the tool balls into table 2\n    robot.setPoseTool(TCP_0)\n    robot.MoveJ(target_app_frame)\n    robot.MoveJ([0,0,0,0,10,-200])\n    robot.setPoseFrame(frame1)    \n    robot.MoveJ(target_app_frame)\n    for i in range(ntake):\n        TCPi = TCP_list[i]\n        robot.setPoseTool(TCPi)\n        if idLeave > nballs_frame2-1:\n            raise Exception("No room left to place objects in Table 2")\n        \n        # calculate target wrt frame1: rotation of 180 about Y is needed since Z and X axis are inverted\n        target = transl(frame1_list[idLeave])*roty(pi)*rotx(30*pi/180)\n        target_app = target*transl(0,0,-APPROACH)\n        idLeave = idLeave + 1        \n        robot.MoveL(target_app)\n        robot.MoveL(target)\n        TCP_Off(TCPi, i, frame2)\n        robot.MoveL(target_app)\n\n    robot.MoveJ(target_app_frame)\n\n# Move home when the robot finishes\nrobot.MoveJ([0,0,0,0,10,-200])\n \n', 'tags': '', 'url': 'RoboDK.html'}, {'title': 'Task', 'text': '完成老師CD2021中的Task任務。 \n', 'tags': '', 'url': 'Task.html'}, {'title': 'task1', 'text': '參考自40823131的 task1 \n # open file, default is read mode, since txt content no chinese char4\n# no encoding = "UTF-08" is needed\nwith open("stage3_2a.txt") as fh: #打開"stage3_2a.txt檔案並命名為fh\n    # readlines will read into the whole line and put into list format 23\n    # has \\n at the end of each line 13\n    #讀取 fh檔案並當作data\n    data = fh.readlines()\n    #修改錯誤的學號\n    data = [a.replace(\'4823122\',\'40823122\') for a in data]\n    #去除組別空白部分\n    data = [b.replace(\'\\t\\t\\t\\t\',\'\') for b in data]\n\n    #print(data)#印出data\n#print(len(data))\nfor i in range(len(data)):#設i迴圈的次數為data的長度\n    #print(data)\n    group = data[i].rstrip("\\n").split("\\t")#設group為取data的次數i消除\\n並且以\\t分割數列\n\n    #print(group)\n    print(\'<p>\'+group[0]+\' ＿ <a href="https://\'+group[1]+\'.github.io/\'+group[0]+\'">site</a> | <a href="https://github.com/\'+group[1]+\'/\'+group[0]+\'">repo</a></p>\')\n#印出group字串\n \n  \n    for g in range(2,18,2):#設g迴圈的範圍從第3項開始+2到第18項\n        try:#try...except 可跳過讀取不到的資料\n            print(\'<p>\'+group[g]+\'＿site:\'+\'<a href="https://\'+group[g]+\'.github.io/cd2021\'+\'">\'+group[g]+\'</a>\'+\'|repo:\'+\'<a href="https://github.com/\'+group[g]+\'/cd2021\'+\'">\'+group[g]+\'</a></p>\')\n            #印出group字串\n   \n        except:\n            continue#返回迴圈 \n stage3_ag1 ＿  site  |  repo \n 40823131＿site: 40823131 |repo: 40823131 \n a40823112＿site: a40823112 |repo: a40823112 \n 40823123＿site: 40823123 |repo: 40823123 \n 40823145＿site: 40823145 |repo: 40823145 \n 40823136＿site: 40823136 |repo: 40823136 \n 40823109＿site: 40823109 |repo: 40823109 \n 40823116＿site: 40823116 |repo: 40823116 \n 40823108＿site: 40823108 |repo: 40823108 \n stage3_ag2 ＿  site  |  repo \n 40823151＿site: 40823151 |repo: 40823151 \n 40623121＿site: 40623121 |repo: 40623121 \n 40871106＿site: 40871106 |repo: 40871106 \n 40823102＿site: 40823102 |repo: 40823102 \n 40823104＿site: 40823104 |repo: 40823104 \n 40823106＿site: 40823106 |repo: 40823106 \n 40823101＿site: 40823101 |repo: 40823101 \n 40823132＿site: 40823132 |repo: 40823132 \n stage3_ag3 ＿  site  |  repo \n 40823119＿site: 40823119 |repo: 40823119 \n 40823150＿site: 40823150 |repo: 40823150 \n 40823103＿site: 40823103 |repo: 40823103 \n 40823107＿site: 40823107 |repo: 40823107 \n 40523252＿site: 40523252 |repo: 40523252 \n 40823154＿site: 40823154 |repo: 40823154 \n stage3_ag4 ＿  site  |  repo \n 40823142＿site: 40823142 |repo: 40823142 \n 40823144＿site: 40823144 |repo: 40823144 \n 40823127＿site: 40823127 |repo: 40823127 \n 40823148＿site: 40823148 |repo: 40823148 \n 40823121＿site: 40823121 |repo: 40823121 \n 40823135＿site: 40823135 |repo: 40823135 \n 40823114＿site: 40823114 |repo: 40823114 \n 40823146＿site: 40823146 |repo: 40823146 \n stage3_ag5 ＿  site  |  repo \n 40823111＿site: 40823111 |repo: 40823111 \n 40823115＿site: 40823115 |repo: 40823115 \n 40823128＿site: 40823128 |repo: 40823128 \n 40823120＿site: 40823120 |repo: 40823120 \n 40823140＿site: 40823140 |repo: 40823140 \n 40823124＿site: 40823124 |repo: 40823124 \n 40823139＿site: 40823139 |repo: 40823139 \n 40823126＿site: 40823126 |repo: 40823126 \n stage3_ag6 ＿  site  |  repo \n 40823152＿site: 40823152 |repo: 40823152 \n 40823110＿site: 40823110 |repo: 40823110 \n 40823122＿site: 40823122 |repo: 40823122 \n 40823125＿site: 40823125 |repo: 40823125 \n 40823117＿site: 40823117 |repo: 40823117 \n 40823129＿site: 40823129 |repo: 40823129 \n 40823149＿site: 40823149 |repo: 40823149 \n 40823153＿site: 40823153 |repo: 40823153', 'tags': '', 'url': 'task1.html'}, {'title': 'task2', 'text': '參考老師的bubbleRob模板並於Stage2上進行remoteAPI的模擬。 \n \n stage2-ttt檔 \n remoteAPI程式碼 \n import sim as vrep\nimport sys\n# child threaded script: \n#simExtRemoteApiStart(19999)\n \nvrep.simxFinish(-1)\n \nclientID = vrep.simxStart(\'127.0.0.1\', 19999, True, True, 5000, 5)\n \nif clientID!= -1:\n    print("Connected to remote server")\nelse:\n    print(\'Connection not successful\')\n    sys.exit(\'Could not connect\')\n \nerrorCode,Revolute_joint=vrep.simxGetObjectHandle(clientID,\'Revolute_joint\',vrep.simx_opmode_oneshot_wait)\n \n \nif errorCode == -1:\n    print(\'Can not find left or right motor\')\n    sys.exit()\n \nerrorCode=vrep.simxSetJointTargetVelocity(clientID,Revolute_joint,3, vrep.simx_opmode_oneshot_wait) \n \n', 'tags': '', 'url': 'task2.html'}, {'title': 'Stage3-ag4', 'text': '題目依照Stage2繼續製作，期望它能站立行走，並可鍵盤控制。 \n', 'tags': '', 'url': 'Stage3-ag4.html'}, {'title': '更改1', 'text': '', 'tags': '', 'url': '更改1.html'}, {'title': '英文學習中', 'text': 'API =\xa0Application Programming Interface\xa0應用程式介面 \n simulator 模擬器 \n hierarchy 層次結構 \n components 部件 \n assume 假設 \n programming 程式設計 \n rotation 旋轉 \n orientation 方向 \n reference 參考 \n typically 通常情況下 \n establish 建立 \n serial 串行 \n structurs 結構 \n geometries 幾何圖形 \n collision 碰撞 \n', 'tags': '', 'url': '英文學習中.html'}, {'title': 'CoppeliaSim', 'text': '深知自己對CoppeliaSim的不熟悉故開始學習 \n 學習處 \n 進度 6/77 \n joint介紹 \n 依照框的顏色為 \n 黑：旋轉軸 \n 紅 ：稜形軸 \n 藍 ：球形軸 \n 一個軸只能接一個實體，但一個實體可以接很多個軸。 \n', 'tags': '', 'url': 'CoppeliaSim.html'}, {'title': 'ssh', 'text': '製作鑰匙的指令 \n ssh-keygen -t rsa -b 4096 -C  "使用者學號" \n \n 把製作好的 id_rsa 與 id_rsa.pub 利用 puttygen 轉換成 private key 與 public key \n \n \n \n 修改start.bat的設定 \n \n 將id_sra上的密碼丟到github setting裡的創建new sshkey \n \n 修改Y:\\tmp\\cad2020\\.git裡的config設定 \n \n 到putty.exe的session設定github.com \n \n 設定Proxy (隨身系統可不用 \n 設定SSH裡的Auth讀取鑰匙.ppk的位置 \n \n 之後便可以不輸入帳號密碼進行git push \n \n', 'tags': '', 'url': 'ssh.html'}, {'title': 'heroku', 'text': '步驟1.進入 https://heroku.com 建立帳號。 \n 步驟2.建立heroku app。 \n 步驟3.下載 Heroku CLI。 \n 步驟4.修改start.bat裡的命令搜尋路徑，令heroku可在命令視窗執行。 \n \n \n 步驟5.測試是否可執行及推送。 \n \n \n \n', 'tags': '', 'url': 'heroku.html'}, {'title': 'DC推廣中心', 'text': '全名為Discord， 是一款專為社群設計的免費網路即時通話軟體與數位發行平台。 \n \n 因為目前疫情爆發的緣故，所以準備了除了Google meeting以外的通訊軟體以備不時之需。', 'tags': '', 'url': 'DC推廣中心.html'}]};