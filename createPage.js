const url = new URL(window.location.href);
const urlParams = url.searchParams;

function init_list(){
    var parameter = urlParams.get("category");
    show(parameter); 
}

function init_page(){
    var parameter = urlParams.get("gamecode");
    chooseContent(parameter);
}

function show(name){
    const games = document.getElementsByClassName("game");
    for(var i = 0; i< games.length; i++){
        games[i].style.display = "none";
        for(var j=0; j < games[i].classList.length; j++){
            if(games[i].classList[j] == name){
                games[i].style.display = "block";
                continue;
            }
        }
    }
}

function moveGamePage(code){
    window.location.href = "gamePage.html?gamecode=" + code;
}

function chooseContent(code){
    var H2;
    var P;
    var A_href;
    var Img_src;
    var developer;
    var category;
    var price;
    var score;
    switch(code){
        case '1':
            H2 = "Left 4 Dead 2";
            A_href = "https://store.steampowered.com/app/550/Left_4_Dead_2/";
            Img_src = "img/left_4_dead_2.PNG";
            developer = "Valve";            
            category = "슈팅, 멀티 플레이, 좀비, 고어, 생존";
            price = "11000원";
            score = "89점";
            P = "&nbsp;&nbsp;이 게임은 좀비 아포칼립스를 배경으로하는 2008년도의 최고의 협동 게임인 Left 4 dead의 후속작입니다.<br>\
            최대 4명과 즐길 수 있는 이 게임은 총기, 근접무기, 폭탄 등 생존 무기들을 들고 수많은 좀비 무리를 뚫고 생존 지점까지 돌파하십시오.<br>\
            또한 다양한 특수좀비들이 여러분들의 길을 가로막을 것입니다. 이런 고난을 극복하면서 최강의 생존자가 되어보십시오.<br>\
            <strong><mark>주의!</mark> 이 게임은 많은 잔인한 묘사들이 존재합니다.</strong>";
            break;
        case '2':
            H2 = "Rainbow six Seige";
            A_href = "https://store.steampowered.com/app/359550/Tom_Clancys_Rainbow_Six_Siege/";
            Img_src = "img/raindow_6_seige.PNG";
            developer = "Ubisoft Montreal";
            category = "슈팅, 전략, 멀티 플레이, 경쟁";
            price = "22000원";
            score = "79점";
            P = "&nbsp;&nbsp;톰 클랜시의 레인보우 식스 시즈는 고급스럽고, 현실적이며, 탁월한 계획과 기술이 승부를 좌우하는 전술적인 팀 기반 슈팅 게임입니다. 5대5로 치러지는 공격 대 방어의 게임플레이와 파괴 가능한 환경 속에서 펼쳐지는 치열한 근거리 전투가 특징입니다.<br>\
            수많은 가젯과 레펠, 관찰드론을 이용하고 철저한 전략으로 팀을 승리로 이끄십시오.<br>\
            세계 곳곳에서 고도로 훈련받은 수십 명의 특수 부대 요원 중에 선택하십시오. 최첨단 기술을 사용해 적의 움직임을 추적하십시오. 방벽을 파괴해 새로운 사선을 만드십시오. 천장과 바닥으로 침투해 새로운 접근 지점을 만드십시오. 무기고의 모든 무기와 장비를 사용해 적의 위치를 파악하고, 적을 속여 파괴하며 주변의 환경도 이용해보십시오.\
            <strong><mark>주의!</mark> 이 게임은 서버가 불안정합니다.</strong>";
            break;
        case '3':
            H2 = "Enter the Gungeon";
            A_href = "https://store.steampowered.com/app/311690/Enter_the_Gungeon/";
            Img_src = "img/left_4_dead_2.PNG";
            developer = "Dodge Roll";             
            category = "인디, 로그라이크, 픽셀 그래픽, 슈팅, 싱글, 멀티 플레이";
            price = "16500원";
            score = "84점";
            P = "&nbsp;&nbsp;이 게임은 Enter the Gungeon은 부랑자 무리가 본인의 죄를 면죄 받고자 과거를 지울 수 있다는 전설의 총을 찾기 위해 발사하고, 수집하고, 구르고, 책상을 뒤엎는 총알 지옥 던전 크롤러 게임입니다.<br>\
            영웅을 선택하시고 [팀을 이루어 협동 플레이도 가능합니다] 총굴의 마지막 층까지 싸우며, 살아남으며, 도전해가며, 진보해가며 나아가세요.<br>\
            위험하지만 사랑스러운 건데드와 무장한 무시무시한 총굴 보스들이 영울들을 기다리고 있습니다. 귀중한 전리품을 수집하고, 숨겨진 비밀을 밝혀내세요.<br>\
            가끔은 기회주의자 상인과 대화도 해보시고, 강력한 아이템도 구입해보세요.<br>\
            <b>탄막 슈팅형 액션 로그라이크 던전 크롤러게임인 Enter the Gungeon은 한번쯤은 해볼만한 재미있는 게임입니다.<b>";
            break;
        case '4':
            H2 = "Skul The Hero Slayer";
            A_href = "https://store.steampowered.com/app/1147560/Skul_The_Hero_Slayer/";
            Img_src = "img/skul.PNG";
            developer = "SOUTHPAW GAMES";            
            category = "인디, 로그라이크, 픽셀, 그래픽, 액션, 싱글";
            price = "20500원";
            score = "80점";
            P = "&nbsp;&nbsp;The Hero Slayer은 플랫포머 액션 게임으로 매번 게임의 구성요소가 바뀌는 로그라이크 특징을 가집니다.<br>\
            스컬은 조금 특별한 스켈레톤입니다. 그는 다른 스컬(Skull)을 착용함으로써 새로운 힘을 얻을 수 있습니다.스컬마다 고유한 콤보와 스킬을 가지며 그 특성이 모두 다르기 때문에 당신의 스타일에 딱 맞는 스컬을 착용하여 자신만의 액션을 즐겨보세요.<br>\
            검은 마석에 침식된 강력한 적과 모험가 파티를 무찌르며 앞으로 나아가 진실을 파헤치십시오!<br>\
            이 게임은 2D 픽셀 그레픽의 액션 로그라이크 게임으로 매우 추천할만한 게임입니다. 매 게임마다 다양한 스컬을 수집하고 다양한 아이템 조합을 찾으며 매번 새로운 느낌을 받을 수 있습니다.<br>\
            <strong><mark>주의!</mark> 로그라이크 특성상 초반에는 지루할 수 있음.</strong>";
            break;
        case '5':
            H2 = "Sid Meier's Civilization VI";
            A_href = "https://store.steampowered.com/app/289070/Sid_Meiers_Civilization_VI/";
            Img_src = "img/civilization.PNG";
            developer = "Firaxis Games";            
            category = "전략, 멀티 플레이, 역사, 턴제";
            price = "65000원";
            score = "88점";
            P = "&nbsp;&nbsp;전설적인 게임 디자이너 시드 마이어가 개발한 문명 시리즈는 오랜 역사를 버틸 수 있는 제국을 건설하는 턴제 전략게임입니다. 석기 시대부터 정보화 시대에 걸쳐 세계를 주름잡는 문명의 지배자가 되십시오. 전쟁을 일으키고, 외교관계를 조율하며, 문명을 꽃피우고 역사적인 지도자들과 겨루며 세계사에 길이 남을 위대한 문명을 건설하십시오.<br>\
            문명 6은 당신의 세계에 새로운 방식으로 접근할 수 있게 해줍니다. 도시들은 이제 지도상에서 물리적으로 확장하며, 기술 및 문화의 발달이 새로운 능력을 가져오고, 당신이 5가지 승리방식을 두고 싸우는 동안 다른 지도자들은 역사적인 기록에 근거하여 자신만의 목적을 갖고 경쟁에 임하게 됩니다.<br>\
            제국을 건설하고, 기술을 연구하고, 치밀한 외교와 강력한 군대를 이끌며 자신만의 제국을 강력하게 성장시키십시오.<br>\
            <strong><mark>주의!</mark> 이 게임은 시간이 정~말 빨리 갑니다.</strong>";
            break;
        case '6':
            H2 = "Monster Hunter: World";
            A_href = "https://store.steampowered.com/app/582010/Monster_Hunter_World/";
            Img_src = "img/monster_hunter.PNG";
            developer = "CAPCOM Co., Ltd.";           
            category = "액션, 멀티 플레이, 오픈 월드, 판타지";
            price = "34900원";
            score = "88점";
            P = "&nbsp;&nbsp;새로운 생명의 땅. 사냥하라, 본능에 따라! 대히트 작품 'Monster Hunter: World'에서는 지형과 환경생물, 몬스터의 생태계까지도 이용할 수 있으며, 갖가지 방법을 이용해 거대한 몬스터에게 도전합니다. 새롭게 제작된 'Monster Hunter'의 세계에서 여러분이 원하는 궁극의 헌터 라이프를 체험해 보십시오.<br>\
            플레이어는 헌터가 되어 자신의 취향에 맞는 무기를 선택하고, 다양한 의뢰를 수주하여 돈을 모으고 레벨을 모으십시오.<br>\
            그리고 강력한 몬스터를 잡아 자신의 무기와 방어구를 강화하여 더욱 강력한 고룡에 도전하십시오.<br>\
            화려한 액션은 플레이어로 하여금 멋진 플레이를 보여줄 수 있고, 강력한 몬스터는 짜릿함을 주고, 캐릭터 커스터마이징 시스템은 자신만의 캐릭터를 꾸밀 수 있게 합니다.<br>\
            <strong><mark>주의!</mark> 멀티 플레이를 적극 권장합니다, 이 게임은 dlc가 메인입니다.</strong>";
            break;
        case '7':
            H2 = "Human: Fall Flat";
            A_href = "https://store.steampowered.com/app/477160/Human_Fall_Flat/";
            Img_src = "img/human_fall_flat.PNG";
            developer = "No Brakes Games";
            category = "멀티 플레이, 퍼즐, 어드벤처, 유머";
            price = "20500원";
            score = "70점";
            P = "&nbsp;&nbsp;Human: Fall Flat은 부유하는 초현실적 세계에서 가벼운 마음으로 즐길 수 있는 유쾌한 플랫폼 게임 세트입니다.<br>\
            꿈 레벨마다 저택, 성, 아즈텍 모험에서 눈 쌓인 산, 으스스한 야경 및 공장 부지까지 탐험할 수 있는 새로운 환경을 제공합니다. 여러 개의 경로로 레벨을 통과할 수 있으며, 완벽하게 조절된 신나는 퍼즐이 만족스러운 모험과 독창성을 보장합니다.<br>\
            투석기에 그 바위를 올리는 데 도움이 필요하거나, 벽을 부술 누군가가 필요하신가요? 최대 8명이 함께할 수 있는 온라인 멀티플레이어로 Human: Fall Flat의 플레이 방법을 완전히 바꿉니다.<br>\
            또한 본인만의 캐릭터를 꾸밀 수 있고, 친구들과의 협동으로 문제를 풀어나갈 수 있습니다.<br>\
            만약 더많은 맵을 탐험하고 싶다면, 창작마당에서 다른 유저가 만든 맵들을 탐험할 수 있습니다.<br>\
            <strong><mark>주의!</mark> 친구랑 같이하면 친구를 낭떠러지에 떨어트리는 자신의 모습을 볼 수 있음.</strong>";
            break;
        case '8':
            H2 = "Hunt: Showdown";
            A_href = "https://store.steampowered.com/app/594650/Hunt_Showdown/";
            Img_src = "img/hunt_showdown.PNG";
            developer = "Crytek";
            category = "슈팅, 전략, 멀티 플레이, 분위기있는, 싱글, 멀티, 생존";
            price = "49000원";
            score = "81점";
            P = "&nbsp;&nbsp;이 게임은 서부시대를 배경으로하는 배틀로얄 게임으로 여러 다양한 서부시대 총기들을 사용할 수 있습니다.<br>\
            단서를 수집하여 목표를 처치, 추방시키고 보상을 획득하세요. 그러면 주변의 모든 헌터들이 그 보상을 노리고 여러분께 달려들 것입니다.<br>\
            아니면 그 반대가 될 수도 있구요.<br>\
            헌터들을 고용하고 상점에서 무기와 아이템을 구매하여 전장으로 뛰어들 수 있습니다.<br>\
            또한 본인의 캐릭터의 레벨을 올려 도움이 되는 여러 특성들을 찍을 수 있습니다.<br>\
            <strong><mark>주의!</mark> 한국어 지원을 하지 않습니다. 게임이 어렵습니다.</strong>";
            break;
        case '9':
            H2 = "ARK: Survival Evolved";
            A_href = "https://store.steampowered.com/app/346110/ARK_Survival_Evolved/";
            Img_src = "img/ark_survival.PNG";
            developer = "Studio Wildcard"; 
            category = "생존, 오픈월드, 멀티 플레이, 싱글, 제작, 공룡";
            price = "20500원";
            score = "70점";
            P = "&nbsp;&nbsp;영문도 모른체 팔에 이상한 장치가 부착된 채로 어떤 섬에서 깨어난 당신. 주위를 보니 멸종 했을 공룡들이 돌아다니고 있습니다.<br>\
            자원을 모아 도구를 만들고, 공룡들을 길들이십시오. 부족을 형성하고 사람들을 모아 다른 부족과 전쟁을 할 수도, 특수 장치를 이용해 보스 레이드을 할 수도 있습니다.<br>\
            여러 맵들을 정복해 나가며 진실을 밝히십시오. 아니면 전쟁을 하여 세계의 지배자가 될 수도 있습니다.<br>\
            이 게임은 광활한 맵에서 이루어지는 생존 제작게임으로 우리 인간이 얼마나 한없이 약한 존재인지를 깨닫게 해줄 것입니다.<br>\
            <strong><mark>주의!</mark> pvp는 추천하지 않습니다. 건강에 헤롭습니다.</strong>";
            break;
        case '10':
            H2 = "Stardew Valley";
            A_href = "https://store.steampowered.com/app/413150/Stardew_Valley/";
            Img_src = "img/stardew_valley.PNG";
            developer = "ConcernedApe";
            category = "시뮬레이션, 픽셀 그래픽, 싱글, 릴랙스";
            price = "16000원";
            score = "89점";
            P = "&nbsp;&nbsp;당신은 Stardew Valley에 있는 할아버지의 오래된 농장 부지를 물려받았습니다. 물려받은 도구와 동전 몇 개로 무장한 당신은 새로운 삶을 시작하기 시작했습니다.<br>\
            땅에서 사는 법을 배우고 무성한 들판을 번성하는 집으로 바꿀 수 있습니까? 쉽지 않을 것입니다.<br>\
            조자 코퍼레이션이 마을에 온 이후로 예전 삶의 방식은 거의 사라졌습니다. 한때 마을에서 가장 활기 넘치는 활동의 중심지였던 커뮤니티 센터는 이제 엉망진창이 되었습니다.<br>\
            하지만 계곡에는 기회가 가득한 것 같습니다. 약간의 헌신으로 Stardew Valley를 위대함으로 복원할 수 있습니다!<br>\
            <b>이 게임을 통해 자신만의 농장을 가꾸고, 모험도 하고, 낚시도 하고 힐링을 즐기십시오</b>";
            break;
        case '11':
            H2 = "HearthStone";
            A_href = "https://hearthstone.blizzard.com/ko-kr";
            Img_src = "img/hearthstone.jpg";
            developer = "Blizzard Entertainment";
            category = "멀티 플레이, 전략, 카드, 턴제";
            price = "무료";
            score = "88점";
            P = "&nbsp;&nbsp;카드를 모아 덱을 생성하세요.<br>\
            하스스톤에는 하수인, 주문, 퀘스트, 영웅 카드가 있으며, 모든 카드는 멋진 효과와 즐거운 상호 작용으로 게임을 더욱 흥미진진하게 만들어줍니다. 만반의 준비를 갖추고 상대를 이기십시오!<br>\
            수많은 확장팩과 영웅들, 나만의 덱을 만들어 다른 플레이어와의 대결에서 승리하십시오.<br>\
            이외에도 투기장, 선술집 난투, 전장을 통해 새로운 경험을 할 수 있습니다.<br>\
            이 게임은 카드를 수집하여 직업을 고르고 덱을 만들어 다른 플레이어와 겨루는 카드게임입니다.<br>\
            <b>하수인을 소환하고 강력한 주문을 시전하여 적 영웅을 격파하십시오!</b>";
            break;
        case '12':
            H2 = "Slay the Spire";
            A_href = "https://store.steampowered.com/app/646570/Slay_the_Spire/";
            Img_src = "img/slay_the_spire.PNG";
            developer = "Mega Crit Games";
            category = "싱글, 카드, 턴제, 로그라이크, 전략, 인디";
            price = "26000원";
            score = "89점";
            P = "&nbsp;&nbsp;카드 게임이라는 장르와 로그라이크라는 장르를 합쳐, 저희가 만들 수 있는 최고의 싱글 플레이 덱 빌딩 게임을 만들었습니다. 독창적인 덱을 만들고, 기이한 적들과 조우하며, 엄청난 힘을 가진 유물을 발견하고, 첨탑을 정복해보세요!<br>\
            나만의 덱을 만들어보세요: 심사숙고해서 카드들을 선택하세요! 첨탑을 등반하면서 수백 장의 카드들을 발견하고 덱에 추가해보세요. 서로 잘 어울리는 카드들을 덱에 추가해가며 적들을 효율적으로 무찌르고 첨탑의 정상에 도달해보세요.<br>\
            강력한 유물들을 발견하세요: '유물'이라고 불리는 강력한 물건들을 첨탑 곳곳에서 발견할 수 있습니다. 이 유물들의 효과는 여태까지 만든 덱과 상호작용을 통해 엄청난 효과를 만들어낼 수도 있어요. 하지만 조심하셔야 할 겁니다. 유물을 얻기 위해서는 골드 그 이상의 대가가 필요할지도 모르니까요...<br>\
            이 게임은 로그라이크 덱 빌딩 카드게임입니다. 직업을 선택하고 카드를 모으고 탐험 경로를 설정하세요. 최종적으로는 첨탑의 심장을 격파하여 엔딩을 마주하십시오.<br>\
            <small>*여러분의 운을 시험해 보십시오</small>";
            break;
        case '13':
            H2 = "Portal 2";
            A_href = "https://store.steampowered.com/app/620/Portal_2/";
            Img_src = "img/portal2.PNG";
            developer = "Valve";
            category = "싱글, 멀티 플레이, 퍼즐, 공상과학";
            price = "11000원";
            score = "95점";
            P = "&nbsp;&nbsp;포털 2는 70개가 넘는 게임 관련 상을 수상하고 열광적인 팬층을 만들어낸 오리지널 포털의 혁신적인 게임 플레이 방식과 스토리, 음악을 바탕으로 제작되었습니다.<br>\
            포털 2의 싱글 플레이 모드에서는 생동감 있는 새 캐릭터와 여러 새로운 퍼즐 그리고 더욱더 거대하고 복잡한 실험실을 만나볼 수 있습니다. 플레이어는 예전에는 가 볼 수 없었던 애퍼처 사이언스 연구소의 다른 지역들을 탐험하고, 전작에서 플레이어를 인도하던 악명 높은 인공지능 컴퓨터인 GLaDOS와 재회하게 됩니다.<br>\
            새로운 협동 플레이 모드는 별도의 캠페인과 독특한 스토리, 실험실과 함께 2명의 새로운 플레이어 캐릭터를 선보입니다. 이 새로운 모드는 플레이어들이 포털에 대해 알고 있다고 생각하던 기존의 모든 것을 재고하게끔 합니다. 협동적으로 행동하는 것만으로는 충분치 않습니다. 오로지 협동적으로 생각해야만 실험을 성공적으로 통과할 수 있습니다.<br>\
            싱글과 멀티 둘 다 즐길 수 있는 포탈2는 퍼즐을 풀며 다음 방으로 진행하며 게임의 스토리를 즐기는 게임입니다.<br>\
            <strong><mark>주의!</mark> 스토리상 포탈1을 먼저 플레이 하지 않으면 스토리 이해가 매우 힘듭니다.</strong>";
            break;
        case '14':
            H2 = "Vampire Survivors";
            A_href = "https://store.steampowered.com/app/1794680/Vampire_Survivors/";
            Img_src = "img/vampire_survivors.PNG";
            developer = "poncle";
            category = "로그라이크, 액션, 싱글, 픽셀 그래픽, 슈팅";
            price = "5000원";
            score = "87점";
            P = "&nbsp;&nbsp;수많은 어둠의 피조물을 쓰러뜨리며 새벽이 올 때까지 생존하세요!<br>\
            Vampire Survivors는 로그라이트 요소를 갖춘 고딕 호러 케주얼 게임입니다. 당신의 선택으로 순식간에 수백 마리의 괴물이 눈덩이처럼 불어날 수 있죠.<br>\
            Vampire Survivors는 미니멀한 게임플레이와 로그라이트 요소를 갖춘 시간 제한 생존 게임입니다. <br>\
            지옥은 텅텅 비어 있습니다. 악마들이 이곳에 나와 있기 때문이죠. 숨거나 도망칠 곳은 없습니다. 당신의 투쟁을 끝내줄 죽음이 오기 전까지 최대한 생존하는 수밖에 없습니다. 매번 골드를 모아 업그레이드를 구매하고 다음 생존자를 도우세요.<br>\
            이 게임은 생존자를 선택하고 무기와 패시브 아이템들을 수집하고 강화하며 괴물을 막고 최종적으로는 30분을 버티는 게임입니다.<br>\
            <b>생각없이 즐기기 좋은 게임!</b>";
            break;
        case '15':
            H2 = "For The King";
            A_href = "https://store.steampowered.com/app/527230/For_The_King/";
            Img_src = "img/for_the_king.PNG";
            developer = "IronOak Games";
            category = "턴제, 전략, 멀티 플레이, 판타지";
            price = "20500원";
            score = "79점";
            P = "&nbsp;&nbsp;왕은 알려지지 않은 가해자에 의해 살해당했습니다. 한때 평화로웠던 파룰 왕국은 이제 혼란에 빠졌습니다.<br>\
            돌이킬 곳이 없고 자신의 능력 이상으로 뻗어 있는 여왕은 이 땅의 시민들에게 일어나 임박한 파멸의 조수를 막을 수 있도록 간절한 탄원을 내놓았습니다. 무자비한 요소에 용감하게 맞서고, 사악한 생물과 싸우고, 바다를 항해하고, 어두운 지하 세계를 탐험하시겠습니까? 여행에서 돌아오기 전에는 없습니다. 당신은 혼돈을 종식시킬 사람이 될 수 있습니까?<br>\
            For The King은 전략, JRPG 전투, 로그라이크 요소가 혼합된 도전적인 게임입니다. 이 게임은 턴제방식으로 진행이 되며, 모든 요소가 확률에 의존합니다. 운이 좋으면 좋은 결과가 나오겠지요.<br>\
            <b>모험을 하며, 괴물을 물리치고 장비를 수집하여 최종 보스를 쓰러트리세요!<b>";
            break;
        case '16':
            H2 = "There Is No Game: Wrong Dimension";
            A_href = "https://store.steampowered.com/app/1240210/There_Is_No_Game_Wrong_Dimension/";
            Img_src = "img/there_is_no_game.PNG";
            developer = "Draw Me A Pixel";
            category = "인디, 퍼즐, 픽셀 그레픽, 싱글";
            price = "13500원";
            score = "89점";
            P = "&nbsp;&nbsp;\"There is no game: Wrong dimension\"은 포인트&클릭 코미디 어드벤쳐로 바보같고 예상치 못한 게임 속의 우주로 한 번도 바라지 않았던 여행을 떠나게 됩니다.<br>\
            과연 여러분들은 집에가기 위해 \"게임\"을 할 수 있을 까요?<br>\
            이 게임은 마우스를 활용한 어드벤쳐 퍼즐 게임으로, 픽셀로 이루어진 그레픽과 다양한 이야기들을 보며 버그를 고치십시오<br>\
            제 4의 벽을 허물은 창의적인 퍼즐과 유쾌한 더빙으로 플레이어에게 즐거움을 선사합니다. <strong>적극 추천!</strong>";
            break;
    }
    creating(H2, P, A_href, Img_src, developer, category, price, score);
}

function creating(H2_cont ,P_cont, A_href, Img_src, developer, category, price, score){
    var P = document.getElementById("main");
    var Img = document.getElementById("Img");
    var A = document.getElementById("Link");
    var H2 = document.getElementById("Name");

    document.getElementById("develop").innerHTML = developer;
    document.getElementById("category").innerHTML = category;
    document.getElementById("price").innerHTML = price;
    document.getElementById("score").innerHTML = score;

    P.innerHTML = P_cont;
    H2.innerHTML = H2_cont;
    Img.src = Img_src;
    A.href = A_href;
}
