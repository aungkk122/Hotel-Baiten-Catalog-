/**
 * Hotel Souvenir Shop (売店 - Baiten) Complete Product Catalog Database
 * Extracted thoroughly from the 20-page Hotel Catalog PDF
 * Hotel: 白浜古賀の井リゾート＆スパ (Coganoi-Resort) & Shirahama, Wakayama Specialties
 * Every single product tagged with its authentic original PDF catalog page (1 - 20)
 */

window.BAITEN_PRODUCTS = [
  // ================= PAGE 1: SNACKS & NOODLES CORNER =================
  {
    id: 'nissin_cup_noodles',
    page: 1,
    name: '日清 カップヌードル 各種',
    furigana: 'にっしん カップヌードル かくしゅ',
    ruby_name: '<ruby>日清<rt>にっしん</rt></ruby> カップヌードル <ruby>各種<rt>かくしゅ</rt></ruby>',
    name_my: 'ခေါက်ဆွဲဘူး အမျိုးမျိုး (Regular/Original, Seafood, Curry စသည့်အရသာများ)',
    name_en: 'Nissin Cup Noodles Assorted (Regular, Seafood, Curry)',
    category: '麺類・ラーメン',
    price: 260,
    description_ja: '日本の国民的カップ麺。レギュラー、シーフード、カレーなど夜食や軽食に人気です。',
    description_my: 'ဂျပန်နိုင်ငံ၏ နာမည်ကြီး ခေါက်ဆွဲဘူးဖြစ်ပြီး ညဉ့်နက်သရေစာအဖြစ် အထူးလူကြိုက်များပါသည်။',
    description_en: 'Japan iconic cup noodles in Regular, Seafood, and Curry flavors. Perfect night snack.',
    icon: '🍜',
    allergens: ['小麦', '卵', '乳', '豚肉', '鶏肉', '大豆'],
    shelf_life_storage: '製造日より6ヶ月 / 常温保存',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '夜食', hiragana: 'やしょく', myanmar: 'ညဉ့်နက်သရေစာ', english: 'Midnight snack' },
      { kanji: '各種', hiragana: 'かくしゅ', myanmar: 'အမျိုးမျိုး', english: 'Various kinds' }
    ],
    service_pitch: {
      ja: 'お部屋でのお夜食に大変人気がございます。お湯は客室ポットをご利用いただけます。',
      furigana: 'おへやでのおやしょくにたいへんにんきがございます。おゆはきゃくしつポットをごりよういただけます。',
      my: 'အခန်းထဲတွင် ညဉ့်နက်သရေစာစားရန် အလွန်သင့်တော်ပြီး ရေနွေးကို အခန်းထဲရှိ ဓာတ်ဗူးဖြင့် သုံးနိုင်ပါတယ်။',
      en: 'Very popular as a late-night room snack. Hot water is available in your guest room kettle.'
    }
  },
  {
    id: 'donbei_udon_soba',
    page: 1,
    name: '日清 どん兵衛 きつねうどん・天ぷらそば',
    furigana: 'にっしん どんべえ きつねうどん・てんぷらそば',
    ruby_name: '<ruby>日清<rt>にっしん</rt></ruby> どん<ruby>兵衛<rt>べえ</rt></ruby> きつねうどん・<ruby>天<rt>てん</rt></ruby>ぷらそば',
    name_my: 'Donbei Udon နှင့် Soba ခေါက်ဆွဲဘူးများ',
    name_en: 'Nissin Donbei Kitsune Udon & Tempura Soba',
    category: '麺類・ラーメン',
    price: 260,
    description_ja: 'ふっくらお揚げのきつねうどんと、サクサク天ぷらの天ぷらそば。本格和風だしの旨味。',
    description_my: 'တို့ဟူးကြော်ကြီးပါသော Udon နှင့် အကြွပ်ကြော်ပါသော Soba ခေါက်ဆွဲဘူး ဖြစ်ပါသည်။',
    description_en: 'Classic instant noodles with fluffy fried tofu (kitsune) and crispy tempura with dashi broth.',
    icon: '🥢',
    allergens: ['小麦', 'そば', '卵', '乳', '大豆'],
    shelf_life_storage: '製造日より6ヶ月 / 常温保存',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '出汁', hiragana: 'だし', myanmar: 'ဂျပန်စွပ်ပြုတ်ဟင်းရည်အနှစ်', english: 'Japanese dashi soup stock' },
      { kanji: '天ぷら', hiragana: 'てんぷら', myanmar: 'ဂျပန် အကြော်စုံ', english: 'Tempura' }
    ],
    service_pitch: {
      ja: '関西風の上品なお出汁が染みた、温かい和風カップ麺でございます。',
      furigana: 'かんさいふうのじょうひんなおだしがしみた、あたたかいわふうカップめんでございます。',
      my: 'Kansai စတိုင် ဟင်းရည်မွှေးမွှေးဖြင့် ပြုလုပ်ထားသော ရိုးရာခေါက်ဆွဲဘူး ဖြစ်ပါတယ်။',
      en: 'A comforting bowl of noodles infused with refined Kansai-style dashi broth.'
    }
  },
  {
    id: 'kishu_ume_chips',
    page: 1,
    name: '紀州南高梅ポテトチップス',
    furigana: 'きしゅうなんこううめ ポテトチップス',
    ruby_name: '<ruby>紀州南高梅<rt>きしゅうなんこううめ</rt></ruby>ポテトチップス',
    name_my: 'ဝါကာယာမ ဒေသထွက် နန်ခိုးဆီးသီးအရသာ အာလူးကြော်ထုတ်များ',
    name_en: 'Local Kishu Nanko Ume Potato Chips',
    category: 'スナック・おつまみ',
    price: 380,
    description_ja: '和歌山特産の高級紀州南高梅パウダーを使用した爽やかな酸味とだしの旨味がクセになるご当地ポテトチップス。',
    description_my: 'Wakayama ဒေသထွက် နန်ခိုးဆီးသီးအမှုန့်ဖြင့် အရသာစပ်ထားသော ဆီးသီးအရသာ အာလူးကြော်ထုတ် ဖြစ်ပါသည်။',
    description_en: 'Locally limited potato chips seasoned with real Kishu Nanko ume plum powder for a tangy, savory crunch.',
    icon: '🥔',
    badge: 'ご当地限定ポテチ',
    allergens: ['小麦', '大豆', '豚肉'],
    shelf_life_storage: '製造日より120日 / 常温保存',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: 'ご当地', hiragana: 'ごとうち', myanmar: 'ဒေသထွက် အထူးသီးသန့်', english: 'Local specialty' },
      { kanji: '酸味', hiragana: 'さんみ', myanmar: 'အချဉ်ဓာတ်', english: 'Tartness / Acidity' }
    ],
    service_pitch: {
      ja: '和歌山限定のご当地ポテトチップスで、お土産にもお酒のおつまみにも大人気です。',
      furigana: 'わかやまげんていのごとうちポテトチップスで、おみやげにもおさけのおつまみにもだいにんきです。',
      my: 'Wakayama သီးသန့် အာလူးကြော်ဖြစ်ပြီး လက်ဆောင်အဖြစ်ရော အရက်မြည်းရန်အတွက်ပါ အလွန်ကောင်းမွန်ပါတယ်။',
      en: 'A Wakayama-exclusive snack, extremely popular as a gift or beer snack.'
    }
  },
  {
    id: 'calbee_jagariko',
    page: 1,
    name: 'カルビー じゃがりこ（サラダ・チーズ）',
    furigana: 'カルビー じゃがりこ',
    ruby_name: 'カルビー じゃがりこ',
    name_my: 'Calbee အာလူးချောင်းကြော်ဘူးသေးများ (Salad, Cheese အရသာ)',
    name_en: 'Calbee Jagariko Potato Sticks (Salad, Cheese)',
    category: 'スナック・おつまみ',
    price: 190,
    description_ja: '「食べだしたらキリンがない」でおなじみのサクサク香ばしい大人気ポテトスティック。',
    description_my: 'ကြွပ်ရွမွှေးကြိုင်သော နာမည်ကြီး အာလူးချောင်းဘူးလေးများ ဖြစ်ပါသည်။',
    description_en: 'Addictively crispy potato sticks in portable cup packaging.',
    icon: '🍟',
    allergens: ['乳', '大豆'],
    shelf_life_storage: '製造日より3ヶ月 / 常温保存',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '香ばしい', hiragana: 'こうばしい', myanmar: 'မွှေးကြိုင်သော', english: 'Aromatic / Fragrant' }
    ],
    service_pitch: {
      ja: 'お部屋や車内でのスナックとして手軽に召し上がれる大定番でございます。',
      furigana: 'おへややしゃないでのスナックとしててがるにめしあがれるだいていばんでございます。',
      my: 'အခန်းထဲတွင်ဖြစ်စေ ကားစီးရင်းဖြစ်စေ စားရလွယ်ကူသော မုန့်ဖြစ်ပါတယ်။',
      en: 'A beloved staple easily enjoyed in your hotel room or during your travels.'
    }
  },
  {
    id: 'fried_squid_bar_snacks',
    page: 1,
    name: 'イカ・フライ・おつまみ各種',
    furigana: 'イカ・フライ・おつまみ かくしゅ',
    ruby_name: 'イカ・フライ・おつまみ<ruby>各種<rt>かくしゅ</rt></ruby>',
    name_my: 'ပြည်ကြီးငါးကြော်နှင့် ဘီယာ/အရက်မြည်းစရာ သရေစာအိတ်များ',
    name_en: 'Crispy Fried Squid & Japanese Bar Snacks Assortment',
    category: 'スナック・おつまみ',
    price: 450,
    description_ja: '旨味たっぷりのイカフライや珍味など、お部屋での晩酌やビールのお供に最適なアソート。',
    description_my: 'အရသာပြည့်ဝသော ပြည်ကြီးငါးကြော်နှင့် ဘီယာ/အရက် သောက်ရင်း မြည်းစရာ သရေစာအိတ်များ ဖြစ်ပါသည်။',
    description_en: 'Savory fried squid and seafood bar snacks ideal for enjoying alongside evening beers.',
    icon: '🦑',
    allergens: ['小麦', 'いか', '大豆'],
    shelf_life_storage: '製造日より120日 / 常温保存',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '晩酌', hiragana: 'ばんしゃく', myanmar: 'ညဘက် အိမ်/အခန်းတွင် အရက်အေးဆေးသောက်ခြင်း', english: 'Evening drink at home/room' },
      { kanji: '珍味', hiragana: 'ちんみ', myanmar: 'ရှားပါး အရသာရှိသော အမြည်း', english: 'Delicacy' }
    ],
    service_pitch: {
      ja: '売店の冷えた缶ビールや地酒とご一緒に、お部屋での晩酌にぜひどうぞ。',
      furigana: 'ばいてんのひえたかんビールやじざけとごいっしょに、おへやでのばんしゃくにぜひどうぞ。',
      my: 'အရောင်းဆိုင်ရှိ ဘီယာအေးအေးလေးများ သို့မဟုတ် ဒေသထွက်ဆာကေးနှင့်အတူ မြည်းစမ်းကြည့်ပါခင်ဗျာ။',
      en: 'Pair this perfectly with our chilled local beers or sake for a relaxing evening in your room.'
    }
  },

  // ================= PAGE 2: WAKAYAMA SPECIALTIES, MISO & BEERS =================
  {
    id: 'kumano_beef_meat_miso',
    page: 2,
    name: '熊野牛 肉味噌',
    furigana: 'くまのぎゅう にくみそ',
    ruby_name: '<ruby>熊野牛<rt>くまのぎゅう</rt></ruby> <ruby>肉味噌<rt>にくみそ</rt></ruby>',
    name_my: 'အမဲသားရောစပ်ထားသော ဟင်းခတ် Miso အနှစ်ဘူး',
    name_en: 'Kumano Beef Meat Miso',
    category: '調味料・特産品',
    price: 850,
    description_ja: '和歌山のブランド黒毛和牛「熊野牛」のひき肉を甘辛い味噌とじっくり煮込んだおかず味噌。ご飯のお供、野菜スティックにも最適。',
    description_my: 'ဝါကာယာမဒေသထွက် Kumano အမဲသားအရသာ ထည့်သွင်းထားသော ဟင်းခတ် Miso အနှစ်ဘူးဖြစ်ပြီး ထမင်းပူပူပေါ်တင်စားရန် အထူးကောင်းမွန်ပါသည်။',
    description_en: 'Savory table miso stewed with minced premium Kumano wagyu beef. Outstanding atop warm rice or as a veggie dip.',
    icon: '🥩',
    badge: 'ご飯のお供No.1',
    allergens: ['小麦', '大豆', '牛肉'],
    shelf_life_storage: '製造日より180日 / 常温（開封後要冷蔵）',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: 'ひき肉', hiragana: 'ひきにく', myanmar: 'အသားနုပ်နုပ်စင်း', english: 'Minced meat' },
      { kanji: 'ご飯のお供', hiragana: 'ごはんのおとも', myanmar: 'ထမင်းမြိန်စေသော အမြည်းဟင်း', english: 'Side dish for rice' }
    ],
    service_pitch: {
      ja: 'アツアツの白いご飯に乗せるだけで何杯でもおかわりできると大好評でございます。',
      furigana: 'アツアツのしろいごはんにのせるだけでなんばいでもおかわりできるとだいこうひょうでございます。',
      my: 'ထမင်းဖြူ ပူပူလေးပေါ်မှာ တင်စားရုံနဲ့ ထမင်းမြိန်စေတဲ့အတွက် အထူးလူကြိုက်များလှပါတယ်။',
      en: 'Simply spooned onto hot white rice, it is wildly popular and makes every meal delicious.'
    }
  },
  {
    id: 'yuasa_soy_sauce',
    page: 2,
    name: '湯浅醤油',
    furigana: 'ゆあさしょうゆ',
    ruby_name: '<ruby>湯浅醤油<rt>ゆあさしょうゆ</rt></ruby>',
    name_my: 'ပဲငံပြာရည်စစ်စစ် (Wakayama ၏ နာမည်ကျော် ရိုးရာပဲငံပြာရည် ပုလင်းများ)',
    name_en: 'Yuasa Artisanal Traditional Soy Sauce',
    category: '調味料・特産品',
    price: 720,
    description_ja: '日本の醤油発祥の地とされる和歌山県湯浅町。杉樽でじっくり天然醸造された極上の深いコクと芳醇な香りを持つ伝統醤油。',
    description_my: 'ဂျပန်နိုင်ငံ ပဲငံပြာရည် စတင်ပေါက်ဖွားရာ Wakayama Yuasa မြို့၏ သစ်သားစည်ပိုင်းတွင် သဘာဝအတိုင်း အချဉ်ဖောက်ထားသော ရိုးရာပဲငံပြာရည်စစ်စစ် ဖြစ်ပါသည်။',
    description_en: 'Brewed in the birthplace of Japanese soy sauce (Yuasa town) inside cedar casks. Rich, aromatic natural fermentation.',
    icon: '🍶',
    badge: '日本醤油発祥の地',
    allergens: ['小麦', '大豆'],
    shelf_life_storage: '製造日より2年 / 常温保存',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '発祥の地', hiragana: 'はっしょうのち', myanmar: 'စတင်ပေါက်ဖွားရာ မူရင်းဒေသ', english: 'Birthplace / Origin' },
      { kanji: '天然醸造', hiragana: 'てんねんじょうぞう', myanmar: 'သဘာဝအတိုင်း အချဉ်ဖောက်ချက်လုပ်ခြင်း', english: 'Natural fermentation' }
    ],
    service_pitch: {
      ja: 'お刺身やお豆腐にかけると素材本来の旨味が引き立つ、歴史ある名品でございます。',
      furigana: 'おさしみやおとうふにかけるとそざいほんらいのうまみがひきたつ、れきしあるめいひんでございます。',
      my: 'ငါးစိမ်း (Sashimi) သို့မဟုတ် တို့ဟူးပေါ်တွင် ဆမ်းစားပါက မူရင်းအရသာကို ပိုမိုပေါ်လွင်စေသော သမိုင်းဝင်ပစ္စည်း ဖြစ်ပါတယ်။',
      en: 'Pouring this over sashimi or tofu elevates the natural flavor; a truly historic masterpiece.'
    }
  },
  {
    id: 'kinzanji_miso',
    page: 2,
    name: '金山寺味噌',
    furigana: 'きんざんじみそ',
    ruby_name: '<ruby>金山寺味噌<rt>きんざんじみそ</rt></ruby>',
    name_my: 'ဝါကာယာမ ရိုးရာ အသီးအရွက်စိမ် Miso အနှစ်ထုပ်များ',
    name_en: 'Kishu Kinzanji Miso (Preserved Veggie Miso)',
    category: '調味料・特産品',
    price: 680,
    description_ja: '大麦、大豆、米にナスや生姜などの夏野菜を漬け込んで熟成させた食べるお味噌。当館レストランでも朝食・夕食に提供されています。',
    description_my: 'ဝါကာယာမ ရိုးရာ Miso ဖြစ်ပြီး ခရမ်းသီး၊ ဂျင်း စသည့် ဟင်းသီးဟင်းရွက်များ စိမ်ထားသော Miso ဖြစ်ပါသည်။ ဟိုတယ်စားသောက်ခန်းတွင်လည်း ဧည့်ခံကျွေးမွေးပါသည်။',
    description_en: 'Traditional fermented miso containing chunks of eggplant and ginger. Served at our hotel meals; delicious as a condiment or snack.',
    icon: '🥣',
    badge: '当館食事提供品',
    allergens: ['小麦', '大豆'],
    shelf_life_storage: '90日 / 要冷蔵（10℃以下）',
    storage_type: 'chilled',
    vocabulary_table: [
      { kanji: '熟成', hiragana: 'じゅくせい', myanmar: 'ရင့်မှည့်အောင် အချဉ်ဖောက်ထားခြင်း', english: 'Aging / Maturation' },
      { kanji: '朝食', hiragana: 'ちょうしょく', myanmar: 'မနက်စာ', english: 'Breakfast' }
    ],
    service_pitch: {
      ja: '当館の朝食バイキングでもご好評いただいている、お野菜たっぷりのそのまま召し上がれるお味噌です。',
      furigana: 'とうかんのちょうしょくバイキングでもごこうひょういただいている、おやさいたっぷりのそのままめしあがれるおみそです。',
      my: 'ကျွန်တော်တို့ ဟိုတယ် မနက်စာဘူဖေးတွင်လည်း ဧည့်သည်များ ကြိုက်နှစ်သက်ကြပြီး ဟင်းသီးဟင်းရွက်များနှင့် ပြုလုပ်ထားသော Miso ဖြစ်ပါတယ်။',
      en: 'Praised at our hotel breakfast buffet, this vegetable-packed miso is ready to eat as is.'
    }
  },
  {
    id: 'bottled_beers_asahi_kirin',
    page: 2,
    name: '大手メーカー瓶ビール（アサヒ・キリン・サッポロ）',
    furigana: 'おおてメーカー びんビール',
    ruby_name: '<ruby>大手<rt>おおて</rt></ruby>メーカー <ruby>瓶<rt>びん</rt></ruby>ビール',
    name_my: 'Asahi Super Dry၊ Kirin Ichiban၊ Sapporo ပုလင်းကြီးများ',
    name_en: 'Major Brand Bottled Beers (Asahi, Kirin, Sapporo 500ml)',
    category: '地酒・梅酒・ビール',
    price: 650,
    description_ja: '日本の大手3大ビールメーカーの瓶ビール。お風呂上がりの一杯や客室でのくつろぎの時間に冷えております。',
    description_my: 'ဂျပန်ထိပ်တန်း ဘီယာတံဆိပ်ကြီးများ၏ ပုလင်းကြီးများဖြစ်ပြီး ရေပူစမ်းစိမ်ပြီးချိန် သောက်ရန် ရေခဲသေတ္တာထဲတွင် အေးစက်စွာ ထားရှိပါသည်။',
    description_en: 'Chilled 500ml bottled beers from Japan premier breweries. Perfect for enjoying after a relaxing hot spring bath.',
    icon: '🍺',
    allergens: ['麦芽'],
    shelf_life_storage: '冷暗所保存 / 冷蔵ショーケース販売',
    storage_type: 'chilled',
    vocabulary_table: [
      { kanji: '瓶ビール', hiragana: 'びんビール', myanmar: 'ပုလင်းသွတ် ဘီယာ', english: 'Bottled beer' }
    ],
    service_pitch: {
      ja: 'キンキンに冷えた瓶ビールをご用意しております。栓抜きもお貸し出しいたします。',
      furigana: 'キンキンにひえたびんビールをごよういしております。せんぬきもおかしだしいたします。',
      my: 'အလွန်အေးမြနေသော ဘီယာပုလင်းများ အသင့်ရှိပြီး ပုလင်းဖွင့်တံကိုလည်း အခမဲ့ ငှားရမ်းပေးပါတယ်။',
      en: 'Ice-cold bottled beers ready for you; bottle openers are also available for loan.'
    }
  },

  // ================= PAGE 3: DRINKS, TEAS & HOKKAIDO MILK =================
  {
    id: 'pet_green_tea_500ml',
    page: 3,
    name: 'ペットボトルお茶各種 500ml（お〜いお茶・伊右衛門・綾鷹・生茶）',
    furigana: 'ペットボトル おちゃかくしゅ',
    ruby_name: 'ペットボトル お<ruby>茶各種<rt>ちゃかくしゅ</rt></ruby>',
    name_my: 'ရေနွေးနွေးကြမ်း ပုလင်းများ (Oi Ocha, Namacha, Iyemon, Ayataka)',
    name_en: 'Assorted Japanese Bottled Green Teas 500ml',
    category: 'ドリンク・飲料',
    price: 180,
    description_ja: '定番の日本茶ペットボトル各種。緑茶、ほうじ茶、麦茶など湯上がりの水分補給に。',
    description_my: 'ဂျပန်လက်ဖက်ရည်စိမ်း ရေနွေးကြမ်း ပုလင်းများဖြစ်ပြီး ရေပူစမ်းစိမ်ပြီး ရေဓာတ်ဖြည့်ရန် အထူးကောင်းမွန်ပါသည်။',
    description_en: 'Refreshing bottled green tea and roasted tea, ideal for hydration after the hot springs.',
    icon: '🍵',
    allergens: ['なし'],
    shelf_life_storage: '常温保存（ショーケース冷温販売）',
    storage_type: 'chilled',
    vocabulary_table: [
      { kanji: '水分補給', hiragana: 'すいぶんほきゅう', myanmar: 'ရေဓာတ်ဖြည့်တင်းခြင်း', english: 'Hydration' }
    ],
    service_pitch: {
      ja: '温泉に入られた後の水分補給に、すっきりとした冷たいお茶がおすすめでございます。',
      furigana: 'おんせんにはいられたあとのすいぶんほきゅうに、すっきりとしたつめたいおちゃがおすすめでございます。',
      my: 'ရေပူစမ်းစိမ်ပြီးနောက် ရေဓာတ်ဖြည့်ရန် လန်းဆန်းအေးမြသော လက်ဖက်ရည်ကို အကြံပြုအပ်ပါတယ်။',
      en: 'We highly recommend this crisp chilled green tea for hydration after your bath.'
    }
  },
  {
    id: 'hokkaido_milk_cartons',
    page: 3,
    name: '北海道牛乳・コーヒー牛乳・いちご牛乳',
    furigana: 'ほっかいどうぎゅうにゅう・コーヒーぎゅうにゅう・いちごぎゅうにゅう',
    ruby_name: '<ruby>北海道牛乳<rt>ほっかいどうぎゅうにゅう</rt></ruby>・コーヒー<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>',
    name_my: 'နွားနို့ဘူး၊ ကော်ဖီနို့ဘူး၊ စတော်ဘယ်ရီနို့ဘူးများ (Hokkaido Milk)',
    name_en: 'Hokkaido Fresh Milk, Coffee Milk & Strawberry Milk',
    category: 'ドリンク・飲料',
    price: 200,
    description_ja: '温泉旅館の定番！濃厚な北海道産生乳100%の牛乳と、どこか懐かしいコーヒー牛乳、いちご牛乳。',
    description_my: 'ရေပူစမ်းဟိုတယ်များ၏ ထုံးစံအတိုင်း ရေချိုးပြီးသောက်ရန် နာမည်ကြီး နို့ချိုဘူး၊ ကော်ဖီနို့ဘူးများ ဖြစ်ပါသည်။',
    description_en: 'Traditional onsen bathhouse staple! Pure Hokkaido whole milk, rich coffee milk, and sweet strawberry milk.',
    icon: '🥛',
    badge: '温泉上がりの定番',
    allergens: ['乳'],
    shelf_life_storage: '要冷蔵（10℃以下）',
    storage_type: 'chilled',
    vocabulary_table: [
      { kanji: '生乳', hiragana: 'せいにゅう', myanmar: 'နွားနို့စိမ်းစစ်စစ်', english: 'Raw fresh milk' },
      { kanji: '懐かしい', hiragana: 'なつかしい', myanmar: 'လွမ်းမောသတိရဖွယ် ရှေးရိုးရာဆန်သော', english: 'Nostalgic' }
    ],
    service_pitch: {
      ja: '温泉から上がったら、腰に手を当ててグッと飲むコーヒー牛乳が日本の温泉文化の醍醐味です。',
      furigana: 'おんせんからあがったら、こしにてをあててグッとのむコーヒーぎゅうにゅうがにほんのおんせんぶんかのだいごみです。',
      my: 'ရေပူစမ်းစိမ်ပြီးနောက် ခါးထောက်ပြီး ကော်ဖီနို့ သောက်ခြင်းသည် ဂျပန်ရေပူစမ်းယဉ်ကျေးမှု၏ အနှစ်သာရ ဖြစ်ပါတယ်။',
      en: 'Drinking chilled coffee milk with one hand on your hip after an onsen bath is a cherished Japanese tradition.'
    }
  },

  // ================= PAGE 4: WAKAYAMA RAMEN & UMESHU CORNER =================
  {
    id: 'ide_shoten_ramen',
    page: 4,
    name: '和歌山中華そば 井出商店',
    furigana: 'わかやま ちゅうかそば いでしょうてん',
    ruby_name: '<ruby>和歌山中華<rt>わかやま ちゅうか</rt></ruby>そば <ruby>井出商店<rt>いでしょうてん</rt></ruby>',
    name_my: 'Wakayama နာမည်ကျော် ဝက်ရိုးပြုတ်ရည် Ramen ဘူးကြီး',
    name_en: 'Ide Shoten Famous Wakayama Tonkotsu-Shoyu Ramen',
    category: '麺類・ラーメン',
    price: 1180,
    description_ja: '全国的に和歌山ラーメンブームを巻き起こした名店「井出商店」の味を再現。濃厚な豚骨醤油スープにコシのあるストレート麺が絡みます。',
    description_my: 'ဂျပန်တစ်နိုင်ငံလုံးတွင် ကျော်ကြားသော Ide Shoten ၏ ဝက်ရိုးနှင့် ပဲငံပြာရည်ရောစပ် စွပ်ပြုတ်ရည် Ramen ဘူးကြီး ဖြစ်ပါသည်။',
    description_en: 'Authentic gift set recreating the legendary tonkotsu-shoyu broth of Ide Shoten, the shop that made Wakayama ramen famous nationwide.',
    icon: '🍜',
    badge: '和歌山ラーメン名店',
    allergens: ['小麦', '卵', '大豆', '豚肉', '鶏肉'],
    shelf_life_storage: '常温保存（直射日光を避けて）/ 約90日',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '名店', hiragana: 'めいてん', myanmar: 'နာမည်ကြီး ဆိုင်', english: 'Famous restaurant' },
      { kanji: '豚骨', hiragana: 'とんこつ', myanmar: 'ဝက်ရိုးပြုတ်ရည်', english: 'Pork bone broth' },
      { kanji: '再現', hiragana: 'さいげん', myanmar: 'မူရင်းအရသာအတိုင်း ပြန်လည်ဖန်တီးခြင်း', english: 'Recreation' }
    ],
    service_pitch: {
      ja: 'テレビでも多数紹介された和歌山を代表する行列のできる名店のラーメンでございます。',
      furigana: 'テレビでもたすうしょうかいされたわかやまをだいひょうするぎょうれつのできるめいてんのラーメンでございます。',
      my: 'တီဗွီအစီအစဉ်များတွင် မကြာခဏ ဖော်ပြခံရပြီး တန်းစီဝယ်ယူရသော နာမည်ကျော် Wakayama Ramen ဖြစ်ပါတယ်။',
      en: 'Widely featured on TV, this ramen represents the legendary shop with long lines in Wakayama.'
    }
  },
  {
    id: 'kishu_ume_udon_somen',
    page: 4,
    name: '紀州梅うどん・梅そうめん',
    furigana: 'きしゅう うめうどん・うめそうめん',
    ruby_name: '<ruby>紀州梅<rt>きしゅううめ</rt></ruby>うどん・<ruby>梅<rt>うめ</rt></ruby>そうめん',
    name_my: 'နန်ခိုးဆီးသီး ရောစပ်ထားသော ပန်းရောင် Udon နှင့် Somen ခေါက်ဆွဲခြောက်များ',
    name_en: 'Kishu Ume Pink Udon & Somen Noodles',
    category: '麺類・ラーメン',
    price: 880,
    description_ja: '紀州南高梅の果肉を麺に練り込んだ華やかなピンク色の特製うどん＆そうめん。爽やかな梅の香りとつるっとしたのど越し。',
    description_my: 'နန်ခိုးဆီးသီးအနှစ် ရောစပ်နယ်ထားသော ချစ်စရာ ပန်းရောင် Udon နှင့် Somen ခေါက်ဆွဲခြောက်များ ဖြစ်ပါသည်။',
    description_en: 'Vibrant pink Japanese noodles kneaded with Kishu Nanko plum pulp, offering refreshing aroma and smooth texture.',
    icon: '🥢',
    badge: '紀州特産麺',
    allergens: ['小麦'],
    shelf_life_storage: '製造日より約1年 / 常温保存',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '果肉', hiragana: 'かにく', myanmar: 'အသီး၏ အသား/အနှစ်', english: 'Fruit pulp' },
      { kanji: 'のど越し', hiragana: 'のどごし', myanmar: 'မျိုချရ ချောမွေ့မှု', english: 'Smooth swallow' }
    ],
    service_pitch: {
      ja: '鮮やかな梅の色合いで食卓が華やかになり、冷やし麺でも温かいお出汁でも美味しく召し上がれます。',
      furigana: 'あざやかなうめのいろあいでしょくたくがはなやかになり、ひやしめんでもあたたかいおだしでもおいしくめしあがれます。',
      my: 'လှပသော ပန်းရောင်ဆီးသီး အရောင်ကြောင့် ထမင်းစားပွဲကို ကျက်သရေရှိစေပြီး အအေးရော အပူပါ စားသုံးနိုင်ပါတယ်။',
      en: 'The vibrant plum color brightens any dining table, delicious served either chilled or in warm broth.'
    }
  },
  {
    id: 'taru_aged_umeshu',
    page: 4,
    name: '梅酒 樽仕込み',
    furigana: 'うめしゅ たるじこみ',
    ruby_name: '<ruby>梅酒<rt>うめしゅ</rt></ruby> <ruby>樽仕込<rt>たるじこ</rt></ruby>み',
    name_my: 'သစ်သားစည်ပိုင်းထဲတွင် နှစ်ချို့စိမ်ထားသော အဆင့်မြင့် ဆီးသီးအရက်',
    name_en: 'Oak Barrel Aged Premium Kishu Umeshu',
    category: '地酒・梅酒・ビール',
    price: 2400,
    description_ja: '紀州南高梅で仕込んだ原酒をウイスキーの木樽でじっくり熟成。オーク樽の上品な木の香りと深いコクが重なる贅沢なプレミアム梅酒。',
    description_my: 'ဝီစကီ သစ်သားစည်ပိုင်းထဲတွင် နှစ်ချို့ ရင့်မှည့်စေထားသောကြောင့် သစ်သားရနံ့နှင့် နူးညံ့ပြည့်ဝသော ဆီးသီးအရက် အရသာကို ပေးစွမ်းနိုင်သော ပရီမီယမ် အရက် ဖြစ်ပါသည်။',
    description_en: 'Aged patiently in wooden oak casks. Blends the tart elegance of Kishu Nanko plums with deep oak woody notes and complex finish.',
    icon: '🥃',
    badge: '本格樽熟成プレミアム',
    allergens: ['なし'],
    shelf_life_storage: '賞味期限なし（冷暗所保存）',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '木樽', hiragana: 'きだる', myanmar: 'သစ်သားစည်ပိုင်း', english: 'Wooden oak cask' },
      { kanji: '原酒', hiragana: 'げんしゅ', myanmar: 'ရေမရောထားသော အရက်ဦးရည်', english: 'Undiluted cask strength sake' }
    ],
    service_pitch: {
      ja: 'オーク樽で寝かせた奥深い香りで、ロックやストレートでゆっくり味わっていただきたい逸品です。',
      furigana: 'オークだるでねかせたおくぶかいかおりで、ロックやストレートでゆっくりあじわっていただきたいいっぴんです。',
      my: 'သစ်သားစည်ပိုင်းထဲ သိပ်ထားသော နက်နဲသည့် ရနံ့ကြောင့် ရေခဲတုံး သို့မဟုတ် သီးသန့် အေးအေးဆေးဆေး သောက်သုံးရန် အကောင်းဆုံး ဖြစ်ပါတယ်။',
      en: 'Aged in oak barrels, its deep aroma is best savored slowly on the rocks or neat.'
    }
  },
  {
    id: 'torokoku_momohime',
    page: 4,
    name: 'とろこく桃姫',
    furigana: 'とろこく ももひめ',
    ruby_name: 'とろこく<ruby>桃姫<rt>ももひめ</rt></ruby>',
    name_my: 'Wakayama မက်မွန်သီး ဝိုင် / အရက်ချို (Torokoku Momohime Peach Liqueur)',
    name_en: 'Torokoku Momohime Rich Peach Liqueur',
    category: '地酒・梅酒・ビール',
    price: 1580,
    description_ja: '和歌山の特産「紀の里の桃」果汁を贅沢に30%使用した、とろりと濃厚でフルーティーな桃のリキュール。女性に圧倒的人気。',
    description_my: 'ဝါကာယာမဒေသထွက် အရည်ရွှမ်းသော မက်မွန်သီးဖျော်ရည် ၃၀% အထိ အသုံးပြုထားသောကြောင့် အသီးအနှစ် ပြစ်ပြစ်နှစ်နှစ် ချိုမြိန်သည့် အမျိုးသမီးကြိုက် အရက်ချို ဖြစ်ပါသည်။',
    description_en: 'Contains 30% pure Wakayama peach puree. Incredibly luscious, nectar-like dessert liqueur overwhelmingly popular among ladies.',
    icon: '🍑',
    badge: '和歌山桃果汁30%',
    allergens: ['もも'],
    shelf_life_storage: '冷暗所保存（開栓後要冷蔵）',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '桃', hiragana: 'もも', myanmar: 'မက်မွန်သီး', english: 'Peach' },
      { kanji: 'リキュール', hiragana: 'リキュール', myanmar: 'သစ်သီးစိမ် အရက်ချို', english: 'Liqueur' }
    ],
    service_pitch: {
      ja: 'まるで桃をそのまま食べているような贅沢なとろみで、ソーダ割りやミルク割りも格別です。',
      furigana: 'まるでモモをそのままたべているようなぜいたくなとろみで、ソーダわりやミルクわりもかくべつです。',
      my: 'မက်မွန်သီးအစစ်ကို စားနေရသကဲ့သို့ ပျစ်နှစ်ချိုမြိန်ပြီး ဆိုဒါ သို့မဟုတ် နို့ဖြင့် ရောစပ်သောက်သုံးနိုင်ပါတယ်။',
      en: 'Feels like drinking fresh peach puree; exceptional when mixed with soda or milk.'
    }
  },

  // ================= PAGE 5: LOCAL SAKE, CRAFT BEER & CRAFTS =================
  {
    id: 'kid_junmai_daiginjo',
    page: 5,
    name: '清酒 紀土 KID 純米大吟醸',
    furigana: 'せいしゅ キッド じゅんまいだいぎんじょう',
    ruby_name: '<ruby>清酒<rt>せいしゅ</rt></ruby> <ruby>紀土<rt>キッド</rt></ruby> <ruby>純米大吟醸<rt>じゅんまいだいぎんじょう</rt></ruby>',
    name_my: 'KID Junmai Daiginjo ပရီမီယမ် ဂျပန်ဆာကေးပုလင်း',
    name_en: 'KID Junmai Daiginjo Premium Wakayama Sake (Heiwa Shuzou)',
    category: '地酒・梅酒・ビール',
    price: 2200,
    description_ja: '和歌山の銘醸蔵「平和酒造」が醸す世界最高峰の日本酒。きれいで華やかな吟醸香と、紀州の柔らかい仕込み水が生む優しい口当たり。',
    description_my: 'ဝါကာယာမ၏ ကမ္ဘာကျော် အရက်ချက်စက်ရုံမှ ထုတ်လုပ်သော အဆင့်မြင့်ဆုံး Junmai Daiginjo ဆာကေးဖြစ်ပြီး ရနံ့သင်းပျံ့ကာ သောက်သုံးရ အလွန်ချောမွေ့ပါသည်။',
    description_en: 'Crafted by award-winning Heiwa Shuzou using pristine Wakayama mountain soft water. Elegant floral aroma and smooth taste.',
    icon: '🍶',
    badge: '世界最高峰受賞蔵',
    allergens: ['なし'],
    shelf_life_storage: '製造日より約1年 / 冷暗所保存（要冷蔵推奨）',
    storage_type: 'chilled',
    vocabulary_table: [
      { kanji: '純米大吟醸', hiragana: 'じゅんまいだいぎんじょう', myanmar: 'အဆင့်အမြင့်ဆုံး ဂျပန်ဆာကေး အမျိုးအစား', english: 'Top tier Junmai Daiginjo sake' },
      { kanji: '仕込み水', hiragana: 'しこみみず', myanmar: 'အရက်ချက်လုပ်ရာတွင်သုံးသော ရေသန့်', english: 'Brewing water' }
    ],
    service_pitch: {
      ja: '世界的なコンテストでも高く評価される和歌山を代表する美酒で、冷酒で飲むのが一番のおすすめです。',
      furigana: 'せかいてきなコンテストでもたかくひょうかされるわかやまをだいひょうするびしゅで、れいしゅでのむのがいちばんのおすすめです。',
      my: 'ကမ္ဘာ့ပြိုင်ပွဲများတွင် ဆုတံဆိပ်ရရှိထားသော ဆာကေးဖြစ်ပြီး အအေးခံသောက်သုံးရန် အထူးအကြံပြုအပ်ပါတယ်။',
      en: 'Internationally acclaimed Wakayama sake; best served chilled in a wine glass.'
    }
  },
  {
    id: 'kumano_kodo_craft_beer',
    page: 5,
    name: '熊野古道麦酒',
    furigana: 'くまのこどう ビール',
    ruby_name: '<ruby>熊野古道麦酒<rt>くまのこどう ビール</rt></ruby>',
    name_my: 'Kumano Kodo ဒေသထွက် လက်မှုဘီယာဘူး (Isekado Craft Beer)',
    name_en: 'Kumano Kodo Craft Brown Ale Beer',
    category: '地酒・梅酒・ビール',
    price: 490,
    description_ja: '伊勢角屋麦酒が手掛けた、熊野古道の神聖な自然をイメージしたクラフトビール。香ばしいモルトの香りと柑橘系のフルーティーなホップの後味。',
    description_my: 'ကမ္ဘာ့အမွေအနှစ် Kumano Kodo ကို အစွဲပြုချက်လုပ်ထားသော လက်မှု ဘီယာဘူးဖြစ်ပြီး မုယောစပါးရနံ့သင်းကာ သောက်ရလန်းဆန်းစေပါသည်။',
    description_en: 'Artisanal craft brown ale inspired by sacred Kumano pilgrimage trails. Rich malt aroma balanced with crisp citrusy hops.',
    icon: '🍺',
    badge: '地ビール・クラフト',
    allergens: ['麦芽'],
    shelf_life_storage: '缶底に記載 / 冷蔵ショーケースにて販売',
    storage_type: 'chilled',
    vocabulary_table: [
      { kanji: '麦酒', hiragana: 'ビール / ばくしゅ', myanmar: 'ဘီယာ', english: 'Beer / Ale' },
      { kanji: '地ビール', hiragana: 'じビール', myanmar: 'ဒေသထွက် လက်မှုဘီယာ', english: 'Local craft beer' }
    ],
    service_pitch: {
      ja: '温泉上がりにぴったりな、すっきりとしてコクのある和歌山のクラフトビールでございます。',
      furigana: 'おんせんあがりにぴったりな、すっきりとしてコクのあるわかやまのクラフトビールでございます。',
      my: 'ရေပူစမ်း (Onsen) စိမ်ပြီးထွက်လာချိန်တွင် သောက်သုံးရန် အထူးသင့်တော်သော ဒေသထွက် ဘီယာဖြစ်ပါတယ်။',
      en: 'A refreshing yet rich local craft beer, perfect after soaking in our hot springs.'
    }
  },
  {
    id: 'traditional_wooden_chopsticks',
    page: 5,
    name: '伝統工芸の箸・木工品',
    furigana: 'でんとうこうげいのはし・もっこうひん',
    ruby_name: '<ruby>伝統工芸<rt>でんとうこうげい</rt></ruby>の<ruby>箸<rt>はし</rt></ruby>・<ruby>木工品<rt>もっこうひん</rt></ruby>',
    name_my: 'ဂျပန်ရိုးရာ သစ်သားတူများနှင့် လက်မှုပစ္စည်းများ',
    name_en: 'Traditional Japanese Wooden Craft Chopsticks',
    category: '雑貨・アパレル',
    price: 950,
    description_ja: '日本の職人が丁寧に仕上げた天然木のお箸。滑り止め加工が施され、使いやすく長く愛用できる工芸品。',
    description_my: 'ဂျပန်လက်မှုပညာရှင်များ ကိုယ်တိုင် သစ်သားစစ်စစ်ဖြင့် ပြုလုပ်ထားသော ရိုးရာတူများ ဖြစ်ပါသည်။',
    description_en: 'Handcrafted Japanese natural wood chopsticks with non-slip tips. A lasting souvenir of Japanese culture.',
    icon: '🥢',
    allergens: ['なし'],
    shelf_life_storage: '天然木・漆塗り / 食洗機不可',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '箸', hiragana: 'はし', myanmar: 'ထမင်းစားတူ', english: 'Chopsticks' },
      { kanji: '職人', hiragana: 'しょくにん', myanmar: 'လက်မှုပညာရှင်', english: 'Artisan / Craftsman' }
    ],
    service_pitch: {
      ja: '手になじむ上質な天然木のお箸で、ご家族へのお土産としても大変人気でございます。',
      furigana: 'てになじむじょうしつなてんねんぼくのおはしで、ごかぞくへのおみやげとしてもたいへんにんきでございます。',
      my: 'လက်ထဲတွင် ကိုင်တွယ်ရ သက်တောင့်သက်သာရှိသော သစ်သားတူဖြစ်ပြီး မိသားစုအတွက် လက်ဆောင်ပေးရန် လူကြိုက်များပါတယ်။',
      en: 'Comfortable to hold in your hands, these chopsticks are wonderful gifts for friends and family.'
    }
  },

  // ================= PAGE 6: DAILY AMENITIES & T-SHIRTS =================
  {
    id: 'shirahama_onsen_bath_salts',
    page: 6,
    name: '白浜温泉の素・薬用入浴剤',
    furigana: 'しらはまおんせんのもと・やくようにゅうよくざい',
    ruby_name: '<ruby>白浜温泉<rt>しらはまおんせん</rt></ruby>の<ruby>素<rt>もと</rt></ruby>・<ruby>薬用入浴剤<rt>やくようにゅうよくざい</rt></ruby>',
    name_my: 'Shirahama ရေပူစမ်း ရေချိုးဆားထုပ်နှင့် ဆေးဖက်ဝင် ရေချိုးအမွှေးမှုန့်များ',
    name_en: 'Shirahama Onsen Authentic Mineral Bath Salts',
    category: '日用品・たばこ',
    price: 600,
    description_ja: '日本三古湯・白浜温泉の天然成分を凝縮した入浴剤。ご自宅の浴槽で本物の白浜温泉気分を味わえます。',
    description_my: 'ဂျပန်နိုင်ငံ၏ သမိုင်းဝင် ရေပူစမ်း ၃ ခုအနက် တစ်ခုဖြစ်သော Shirahama Onsen သဘာဝသတ္တုဓာတ်များကို အိမ်တွင် ရေစိမ်ခံစားနိုင်ရန် ထုတ်လုပ်ထားသော ဆားမှုန့် ဖြစ်ပါသည်။',
    description_en: 'Mineral bath salts recreating the therapeutic waters of historic Shirahama Onsen in your home bathtub.',
    icon: '♨️',
    badge: '日本三古湯再現',
    allergens: ['なし'],
    shelf_life_storage: '25g×5包入り / 直射日光を避けて常温保存',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '入浴剤', hiragana: 'にゅうよくざい', myanmar: 'ရေချိုးစိမ်ရာတွင် ထည့်သော အမွှေးဆားမှုန့်', english: 'Bath additives / Salts' },
      { kanji: '凝縮', hiragana: 'ぎょうしゅく', myanmar: 'စုစည်းသိပ်သည်းထားသော', english: 'Condensed' }
    ],
    service_pitch: {
      ja: 'ご自宅のお風呂でも白浜温泉のぬくもりを再現していただける大人気のお土産です。',
      furigana: 'ごじたくのおふろでもしらはまおんせんのぬくもりをさいげんしていただけるだいにんきのおみやげです。',
      my: 'အိမ်ပြန်ရောက်ချိန်မှာလည်း Shirahama Onsen ရေပူစမ်း အရသာကို ပြန်လည်ခံစားနိုင်စေသော အမှတ်တရလက်ဆောင် ဖြစ်ပါတယ်။',
      en: 'Recreates the comforting warmth of Shirahama hot springs right in your home bathtub.'
    }
  },

  // ================= PAGE 7: NAGASE FARM AKI-CHAN UME & ICE =================
  {
    id: 'akichan_shiso_ume_box',
    page: 7,
    name: 'あきちゃんの梅 しそ漬け ギフト箱',
    furigana: 'あきちゃんのうめ しそづけ ギフトばこ',
    ruby_name: 'あきちゃんの<ruby>梅<rt>うめ</rt></ruby> しそ<ruby>漬<rt>づ</rt></ruby>け ギフト<ruby>箱<rt>ばこ</rt></ruby>',
    name_my: 'ရှီဆို(ပင်စိမ်းရိုင်းရွက်နီ) ဖြင့် စိမ်ထားသော ရိုးရာဆီးသီးချဉ် လက်ဆောင်သေတ္တာဘူး',
    name_en: "Nagase Farm Aki-chan Ume Shiso Pickled Plum (Gift Box)",
    category: '紀州南高梅',
    price: 1650,
    description_ja: '地元・ながせ農園で丹精込めて育てられた紀州南高梅を、赤しそで鮮やかに漬け込んだ伝統製法の本格梅干し。贈答用の化粧箱入り。',
    description_my: 'Nagase စိုက်ခင်းထွက် နန်ခိုးဆီးသီးများကို ရှီဆိုရွက်နီဖြင့် ရိုးရာအတိုင်း စိမ်ထားသော နာမည်ကြီး ဆီးသီးချဉ် လက်ဆောင်သေတ္တာဘူး ဖြစ်ပါသည်။',
    description_en: 'Authentic Kishu Nanko ume pickled with natural red shiso leaves by Nagase Farm. Packaged in a beautiful gift box.',
    icon: '🔴',
    badge: 'ながせ農園特設ブース',
    allergens: ['なし'],
    shelf_life_storage: '製造日より180日 / 常温保存',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '農園', hiragana: 'のうえん', myanmar: 'စိုက်ပျိုးရေးခြံ', english: 'Farm / Orchard' },
      { kanji: '梅干し', hiragana: 'うめぼし', myanmar: 'ဆီးသီးချဉ်စိမ်', english: 'Pickled plum' }
    ],
    service_pitch: {
      ja: '地元農園直送の南高梅で、赤しその爽やかな香りと伝統の酸味が際立っております。',
      furigana: 'じもとのうえんちょくそうのなんこううめで、あかしそのさわかなかおりとでんとうのさんみがきわだっております。',
      my: 'ဒေသခံစိုက်ခင်းမှ တိုက်ရိုက်ယူဆောင်ထားပြီး ရှီဆိုရွက်နံ့သင်းကာ ရိုးရာဆီးသီးအရသာ စစ်စစ်ဖြစ်ပါတယ်။',
      en: 'Delivered directly from our local farm, highlighting the fragrant shiso aroma and traditional tartness.'
    }
  },
  {
    id: 'akichan_honey_ume_box',
    page: 7,
    name: 'あきちゃんの梅 はちみつ漬け ギフト箱',
    furigana: 'あきちゃんのうめ はちみつづけ ギフトばこ',
    ruby_name: 'あきちゃんの<ruby>梅<rt>うめ</rt></ruby> はちみつ<ruby>漬<rt>づ</rt></ruby>け ギフト<ruby>箱<rt>ばこ</rt></ruby>',
    name_my: 'ပျားရည်စစ်စစ်ဖြင့် စိမ်ထားသော အချိုဓာတ်သန်းသည့် နူးညံ့သော ဆီးသီးချဉ်ဘူးကြီး',
    name_en: "Nagase Farm Aki-chan Ume Honey Pickled Plum (Gift Box)",
    category: '紀州南高梅',
    price: 1750,
    description_ja: '紀州南高梅を天然蜂蜜にじっくり漬け込み、塩分を抑えてフルーティーでまろやかな甘みに仕上げた大人気商品。酸っぱいのが苦手な方にも。',
    description_my: 'ပျားရည်စစ်စစ်ဖြင့် စိမ်ထားသောကြောင့် အချဉ်ဓာတ်နူးညံ့ပြီး အချိုအရသာသန်းကာ လူတိုင်း စားသုံးရန် သင့်တော်သော နာမည်ကြီး ဆီးသီးချဉ် ဖြစ်ပါသည်။',
    description_en: 'Gentle, low-salt Kishu Nanko ume marinated in pure honey for a smooth, sweet, fruity finish. Highly popular for all ages.',
    icon: '🍯',
    badge: '売れ筋No.1梅干し',
    allergens: ['なし'],
    shelf_life_storage: '製造日より180日 / 常温保存',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '蜂蜜', hiragana: 'はちみつ', myanmar: 'ပျားရည်', english: 'Honey' },
      { kanji: '塩分控えめ', hiragana: 'えんぶんひかえめ', myanmar: 'ဆားဓာတ်လျှော့ထားသော', english: 'Low salt / Reduced sodium' }
    ],
    service_pitch: {
      ja: '蜂蜜の優しい甘さで塩分控えめですので、酸っぱい梅干しが苦手なお客様にも大変人気です。',
      furigana: 'はちみつのやさしいあまさでえんぶんひかえめですので、すっぱいうめぼしがにがてなおきゃくさまにもたいへんにんきです。',
      my: 'ပျားရည်အချိုကြောင့် ဆားဓာတ်နည်းပြီး ချဉ်လွန်းတာ မကြိုက်တဲ့ ဧည့်သည်များအတွက်ပါ အထူးလူကြိုက်များပါတယ်။',
      en: 'With its gentle honey sweetness and low sodium, it is a hit even with those who dislike sour plums.'
    }
  },
  {
    id: 'ice_kagerou',
    page: 7,
    name: 'ICE かげろう',
    furigana: 'アイス かげろう',
    ruby_name: 'ICE かげろう',
    name_my: 'ICE かげろう (အမှတ်တရလက်ဆောင်မုန့် Kagerou ကို ရေခဲမုန့်စတိုင် အေးအေးလေး ပြုလုပ်ထားသောမုန့်)',
    name_en: 'Ice Kagerou (Frozen Chilled Cream Cake)',
    category: 'アイス・冷凍',
    price: 300,
    description_ja: '白浜の名物菓子「かげろう」を冷んやりアイス仕立てに！サクサクの生地に特製のアイスクリームを挟んだ売店アイスケース限定のスイーツ。',
    description_my: 'ရှီရာဟာမမြို့၏ နာမည်ကြီး Kagerou မုန့်ကို ရေခဲမုန့်ခရင်မ် အေးအေးလေး ထည့်သွင်းထားသော အထူးထုတ် ရေခဲမုန့် ဖြစ်ပါသည်။',
    description_en: 'The legendary Shirahama Kagerou reimagined as a chilled ice cream treat. Sold directly from our shop freezer cabinet.',
    icon: '🍨',
    badge: '売店冷凍ケース限定',
    allergens: ['小麦', '卵', '乳'],
    shelf_life_storage: '要冷凍（-18℃以下）/ お部屋に持ち帰ってお早めにお召し上がりください',
    storage_type: 'frozen',
    vocabulary_table: [
      { kanji: '要冷凍', hiragana: 'ようれいとう', myanmar: 'ရေခဲသေတ္တာ အအေးခန်းထဲ အခဲထားရန်လိုအပ်သော', english: 'Keep frozen' },
      { kanji: '持ち帰り', hiragana: 'もちかえり', myanmar: 'အခန်းသို့ ယူဆောင်သွားခြင်း', english: 'Take away / Takeout' }
    ],
    service_pitch: {
      ja: '白浜本店と売店限定のひんやりスイーツで、温泉に入った後のクールダウンに最高でございます。',
      furigana: 'しらはまほんてんとばいてんげんていのひんやりスイーツで、おんせんにはいったあとのクールダウンにさいこうでございます。',
      my: 'အရောင်းဆိုင် ကောင်တာတွင်သာ ရရှိနိုင်သော အအေးမုန့်ဖြစ်ပြီး Onsen စိမ်ပြီးနောက် စားသုံးရန် အကောင်းဆုံး ဖြစ်ပါတယ်။',
      en: 'A chilled shop-exclusive sweet, perfect for cooling down right after a hot spring soak.'
    }
  },
  {
    id: 'sowa_mikan_ice_bar',
    page: 7,
    name: '早和果樹園 みかんアイスバー',
    furigana: 'そうわかるえん みかんアイスバー',
    ruby_name: '<ruby>早和果樹園<rt>そうわかるえん</rt></ruby> みかんアイスバー',
    name_my: 'Sowa စိုက်ခင်းထွက် လိမ္မော်ရည်စစ်စစ်ဖြင့် ပြုလုပ်ထားသော လိမ္မော်ရေခဲချောင်း',
    name_en: 'Sowa Orchard Pure Arita Mikan Ice Bar',
    category: 'アイス・冷凍',
    price: 280,
    description_ja: '和歌山有田みかん果汁をふんだんに使用したジューシーなアイスキャンディー。濃厚なみかん本来の甘酸っぱさが口いっぱいに広がります。',
    description_my: 'Wakayama အာရိဒ လိမ္မော်သီးစစ်စစ်ဖြင့် ပြုလုပ်ထားသော ရေခဲချောင်းဖြစ်ပြီး သဘာဝလိမ္မော်ရနံ့ ပြည့်ဝစွာ ခံစားရရှိနိုင်ပါသည်။',
    description_en: 'Juicy artisan popsicle packed with real Arita mandarin orange juice. Naturally sweet and ultra-refreshing.',
    icon: '🍧',
    badge: '果汁たっぷり',
    allergens: ['なし'],
    shelf_life_storage: '要冷凍（-18℃以下）',
    storage_type: 'frozen',
    vocabulary_table: [
      { kanji: '甘酸っぱい', hiragana: 'あまずっぱい', myanmar: 'ချဉ်ချိုအရသာ', english: 'Sweet and sour' },
      { kanji: '冷感', hiragana: 'れいかん', myanmar: 'အေးမြသော အထိအတွေ့', english: 'Cooling sensation' }
    ],
    service_pitch: {
      ja: '有田みかんそのままの果汁感で、さっぱりとお召し上がりいただけます。',
      furigana: 'ありだみかんそのままのかじゅうかんで、さっぱりとおめしあがりいただけます。',
      my: 'အာရိဒ လိမ္မော်သီးအရသာ စစ်စစ်ဖြစ်သောကြောင့် လန်းဆန်းစွာ သုံးဆောင်နိုင်ပါတယ်။',
      en: 'Bursting with authentic mandarin orange juice, it leaves you completely refreshed.'
    }
  },

  // ================= PAGE 8: WAKAYAMA MEIKA & TOBACCO SHOWCASE =================
  {
    id: 'kagerou_fukushido',
    page: 8,
    name: '銘菓 かげろう',
    furigana: 'めいか かげろう',
    ruby_name: '<ruby>銘菓<rt>めいか</rt></ruby> <ruby>かげろう<rt>かげろう</rt></ruby>',
    name_my: 'ခိရှူး နာမည်ကြီး Kagero မုန့်',
    name_en: 'Kagerou Confectionery by Fukushido',
    category: '和菓子・スイーツ',
    price: 1080,
    description_ja: '紀州白浜を代表する銘菓。サクッとした極上ブッセ生地に優しい甘さのバタークリームをサンドした伝統のお菓子です。当館のお茶菓子としても提供されています。',
    description_my: 'ရှီရာဟာမမြို့၏ အထင်ကရ အကျော်ကြားဆုံး မုန့်ဖြစ်ပြီး နူးညံ့သောအလွှာကြား ထောပတ်မလိုင်ခံထားသော မုန့်သေတ္တာဘူးများ ဖြစ်ပါသည်။ ဟိုတယ်ဧည့်ခန်းတွင်လည်း ဧည့်ကြိုမုန့်အဖြစ် ထားရှိပါသည်။',
    description_en: "Shirahama's most celebrated souvenir confection. Light, melt-in-the-mouth crispy sponge filled with silky butter cream. Also served as our hotel room welcome tea sweet.",
    icon: '🍘',
    badge: '人気No.1・客室茶菓子',
    allergens: ['小麦', '卵', '乳'],
    shelf_life_storage: '製造日より約40日 / 常温保存',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '銘菓', hiragana: 'めいか', myanmar: 'နာမည်ကြီး ရိုးရာမုန့်', english: 'Famous confection' },
      { kanji: '代表', hiragana: 'だいひょう', myanmar: 'ကိုယ်စားပြု/အထင်ကရ', english: 'Representative' },
      { kanji: 'お茶菓子', hiragana: 'おちゃがし', myanmar: 'ဧည့်ကြိုလက်ဖက်ရည်မုန့်', english: 'Tea-time sweet' },
      { kanji: '常温', hiragana: 'じょうおん', myanmar: 'အခန်းအပူချိန် (ပုံမှန်အပူချိန်)', english: 'Room temperature' }
    ],
    service_pitch: {
      ja: '当館のお茶菓子としても大人気で、白浜土産に一番おすすめのお菓子でございます。',
      furigana: 'とうかんのおちゃがしとしてもだいにんきで、しらはまみやげにいちばんおすすめのおかしでございます。',
      my: 'ကျွန်တော်တို့ ဟိုတယ်ဧည့်ကြိုမုန့်အဖြစ်လည်း အထူးလူကြိုက်များပြီး ရှီရာဟာမအမှတ်တရအတွက် နံပါတ်တစ် အကြံပြုလိုသော မုန့်ဖြစ်ပါတယ်။',
      en: 'It is beloved as our hotel welcome sweet and is our number one recommended souvenir from Shirahama.'
    }
  },
  {
    id: 'yuzu_monaka',
    page: 8,
    name: '柚もなか',
    furigana: 'ゆずもなか',
    ruby_name: '<ruby>柚<rt>ゆず</rt></ruby>もなか',
    name_my: 'ရိုးရာမုန့်ကြွပ်လွှာကြား ဂျပန်ရှောက်ခါးသီး (Yuzu) ပဲနီအနှစ်သွတ် မုန့်',
    name_en: 'Yuzu Monaka (Citrus Wafer Cakes)',
    category: '和菓子・スイーツ',
    price: 980,
    description_ja: '香ばしく焼き上げた最中皮の中に、和歌山特産の柚子を練り込んだ爽やかな白あんをたっぷり詰めた伝統銘菓。',
    description_my: 'ရိုးရာမုန့်ကြွပ်လွှာကြားတွင် ဝါကာယာမဒေသထွက် Yuzu ဂျပန်ရှောက်ခါးသီး ရနံ့သင်းသော ပဲနီအနှစ်သွတ်ထားသည့် ရိုးရာလက်ဆောင်မုန့် ဖြစ်ပါသည်။',
    description_en: 'Crisp traditional wafers filled with sweet bean paste infused with aromatic Wakayama yuzu citrus.',
    icon: '🍊',
    badge: '和歌山伝統銘菓',
    allergens: ['大豆'],
    shelf_life_storage: '製造日より60日 / 常温保存',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '最中', hiragana: 'もなか', myanmar: 'ဂျပန်ရိုးရာ မုန့်ကြွပ်လွှာ', english: 'Monaka wafer' },
      { kanji: '練り込む', hiragana: 'ねりこむ', myanmar: 'ရောမွှေနယ်ထားသော', english: 'Kneaded into' }
    ],
    service_pitch: {
      ja: '柚子の爽やかな香りが広がる、上品な甘さの伝統和菓子でございます。',
      furigana: 'ゆずのさわかなかおりがひろがる、じょうひんなあまさのでんとうわがしでございます。',
      my: 'Yuzu သီး၏ လန်းဆန်းသောရနံ့သင်းပျံ့ပြီး သိမ်မွေ့ချိုမြိန်သော ဂျပန်ရိုးရာမုန့် ဖြစ်ပါတယ်။',
      en: 'A traditional Japanese sweet with refreshing citrus aroma and delicate sweetness.'
    }
  },
  {
    id: 'hamayuu',
    page: 8,
    name: 'はまゆう',
    furigana: 'はまゆう',
    ruby_name: 'はまゆう',
    name_my: 'ဂျပန်ပဲနီမုန့်ကျွမ်းကျင်သူများ ချီးကျူးထားသော ရိုးရာအန်ကိုမုန့်',
    name_en: 'Hamayuu Traditional Red Bean Confection',
    category: '和菓子・スイーツ',
    price: 950,
    description_ja: '白浜の花「はまゆう」にちなんだ和菓子通絶賛の銘菓。しっとりとした餡の風味と上品な口当たりが格別です。',
    description_my: 'ရှီရာဟာမမြို့၏ ပန်းဖြစ်သော ဟာမာယူကို အစွဲပြုထားပြီး ဂျပန်ရိုးရာ ပဲနီအနှစ်အရသာ စစ်စစ်ကောင်းမွန်သော မုန့်ဖြစ်ပါသည်။',
    description_en: 'Named after Shirahama coastal crinum lily, this classic wagashi is acclaimed for its smooth artisanal sweet bean paste.',
    icon: '🌸',
    badge: '和菓子通推奨',
    allergens: ['小麦', '卵', '大豆'],
    shelf_life_storage: '製造日より30日 / 常温保存',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '口当たり', hiragana: 'くちあたり', myanmar: 'ပါးစပ်ထဲတွင် စားရလွယ်ကူနူးညံ့မှု', english: 'Texture / Mouthfeel' },
      { kanji: '絶賛', hiragana: 'ぜっさん', myanmar: 'အထူးချီးကျူးခံရသော', english: 'High acclaim' }
    ],
    service_pitch: {
      ja: '和菓子がお好きなお客様に自信を持ってお勧めできる逸品でございます。',
      furigana: 'わがしがおすきなおきゃくさまにじしんをもっておすすめできるいっぴんでございます。',
      my: 'ဂျပန်ရိုးရာ မုန့်ကြိုက်နှစ်သက်သော ဧည့်သည်များအတွက် ယုံကြည်စိတ်ချစွာ အကြံပြုနိုင်သော အကောင်းဆုံး မုန့်ဖြစ်ပါတယ်။',
      en: 'We confidently recommend this masterpiece to guests who appreciate traditional Japanese sweets.'
    }
  },
  {
    id: 'iqos_terea_sticks',
    page: 8,
    name: 'IQOS イルマ専用たばこ TEREA（テレア）各種',
    furigana: 'アイコス イルマせんようたばこ テレア',
    ruby_name: 'IQOS イルマ<ruby>専用<rt>せんよう</rt></ruby>たばこ TEREA',
    name_my: 'IQOS Iluma အတွက် သုံးသော TEREA စီးကရက်လိပ် အမျိုးမျိုး',
    name_en: 'IQOS Iluma TEREA HeatSticks (Regular, Menthol, Mint)',
    category: '日用品・たばこ',
    price: 580,
    description_ja: 'IQOSイルマ専用タバコステック。レギュラー、メンソール、ミント等。お会計はお部屋付け（部屋番号・お名前確認）も可能。20歳未満購入禁止。',
    description_my: 'IQOS Iluma အတွက် သုံးသော TEREA စီးကရက်လိပ်များ ဖြစ်ပါသည်။ ငွေရှင်းကောင်တာတွင် အခန်းခထဲသို့ စာရင်းထည့်သွင်း (部屋付け) ၍ ဝယ်ယူနိုင်ပါသည်။',
    description_en: 'Official TEREA tobacco sticks for IQOS Iluma. Room charge available upon room number and guest name verification. Must be 20+.',
    icon: '🚬',
    badge: 'お部屋付け可能・年齢確認',
    allergens: ['たばこ'],
    shelf_life_storage: '要年齢確認（20歳以上）/ 部屋付け対応可能',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '部屋付け', hiragana: 'へやづけ', myanmar: 'အခန်းခထဲသို့ စာရင်းထည့်သွင်းခြင်း', english: 'Room charge' },
      { kanji: '年齢確認', hiragana: 'ねんれいかくにん', myanmar: 'အသက်အရွယ် စစ်ဆေးခြင်း', english: 'Age verification' }
    ],
    service_pitch: {
      ja: 'おタバコはお部屋付けも承っております。お部屋番号とお名前をお伺いしてもよろしいでしょうか。',
      furigana: 'おタバコはおへやづけもうけたまわっております。おへやばんごうとおなまえをおうかがいしてもよろしいでしょうか。',
      my: 'ဆေးလိပ်ကို အခန်းခထဲ စာရင်းထည့်သွင်းဝယ်ယူနိုင်ပါတယ်။ အခန်းနံပါတ်နှင့် နာမည်လေး မေးမြန်းပါရစေခင်ဗျာ။',
      en: 'Cigarettes can be charged to your room folio. May I kindly confirm your room number and name?'
    }
  },

  // ================= PAGE 9: STATIONERY & APPAREL =================
  {
    id: 'the_panda_face_tshirt',
    page: 9,
    name: '「THE PANDA FACE」Tシャツ',
    furigana: 'ザ パンダ フェイス ティーシャツ',
    ruby_name: '「THE PANDA FACE」Tシャツ',
    name_my: 'The North Face အမှတ်တံဆိပ်ကို သရော်ထားသော နာမည်ကျော် "The Panda Face" တီရှပ်',
    name_en: 'The Panda Face Parody Graphic T-Shirt (Black, Grey, White)',
    category: '雑貨・アパレル',
    price: 2480,
    description_ja: '有名アウトドアブランドのロゴをパンダの顔にパロディ化した売店大人気Tシャツ。黑、グレー、白の3色展開。肌触りの良い綿100%。',
    description_my: 'နာမည်ကြီး The North Face ကို ပန်ဒါမျက်နှာဖြင့် သရော်ဟာသဆန်ဆန် ဒီဇိုင်းထုတ်ထားသော လူကြိုက်များသည့် တီရှပ်ဖြစ်ပြီး အနက်၊ မီးခိုး၊ အဖြူ ၃ မျိုး ရှိပါသည်။',
    description_en: 'Clever, popular outdoor brand parody tee featuring a panda silhouette face. Available in Black, Grey, and White. 100% comfortable cotton.',
    icon: '👕',
    badge: '売店大人気アパレル',
    allergens: ['綿100%'],
    shelf_life_storage: 'サイズ: S / M / L / XL / 洗濯機対応',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '綿', hiragana: 'めん / コットン', myanmar: 'ဝါဂွမ်း / ချည်ထည်', english: 'Cotton' },
      { kanji: '展開', hiragana: 'てんかい', myanmar: 'ထုတ်လုပ်ဖြန့်ချိမှု', english: 'Lineup / Variations' }
    ],
    service_pitch: {
      ja: 'ユーモアがあって着心地も抜群ですので、ご自身用にもプレゼントにも大変喜ばれます。',
      furigana: 'ユーモアがあってきごこちもばつぐんですので、ごじしんようにもプレゼントにもたいへんよろこばれます。',
      my: 'ဟာသဉာဏ်လည်းရှိပြီး ဝတ်ရတာ သက်တောင့်သက်သာရှိတဲ့အတွက် ကိုယ်တိုင်ဝတ်ရန်ရော လက်ဆောင်ပေးရန်ပါ သင့်တော်ပါတယ်။',
      en: 'Humorous and exceptionally comfortable, making it a wonderful treat for yourself or a gift.'
    }
  },

  // ================= PAGE 10: ROTATING STAND RACK & ACCESSORIES =================
  {
    id: 'pearl_necklaces_white_grey',
    page: 10,
    name: '真珠・パールネックレス',
    furigana: 'しんじゅ・パールネックレス',
    ruby_name: '<ruby>真珠<rt>しんじゅ</rt></ruby>・パールネックレス',
    name_my: 'အဖြူရောင်နှင့် မီးခိုးရောင် ပုလဲလုံး လည်ဆွဲတို/လည်ဆွဲရှည်များ',
    name_en: 'Authentic White & Grey Luster Pearl Necklaces',
    category: '雑貨・アパレル',
    price: 3800,
    description_ja: '白浜の海を思わせる上品な輝きを放つパールネックレス。フォーマルにもカジュアルにも似合う高級アクセサリー。',
    description_my: 'Shirahama ပင်လယ်ပြင်ကဲ့သို့ တောက်ပသော အဆင့်မြင့် ပုလဲလည်ဆွဲများ ဖြစ်ပါသည်။',
    description_en: 'Elegant white and grey luster pearl necklaces reflecting the beauty of Shirahama coast.',
    icon: '📿',
    allergens: ['なし'],
    shelf_life_storage: '専用ジュエリーケース付き',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '真珠', hiragana: 'しんじゅ', myanmar: 'ပုလဲ', english: 'Pearl' },
      { kanji: '上品', hiragana: 'じょうひん', myanmar: 'သိမ်မွေ့ကျက်သရေရှိသော', english: 'Refined / Elegant' }
    ],
    service_pitch: {
      ja: '上質な光沢を持つ本真珠で、記念日のプレゼントにも大変喜ばれます。',
      furigana: 'じょうしつなこうたくをもつほんしんじゅで、きねんびのプレゼントにもたいへんよろこばれます。',
      my: 'အဆင့်မြင့် အရောင်တောက်ပသော ပုလဲစစ်စစ်ဖြစ်ပြီး အထိမ်းအမှတ် လက်ဆောင်ပေးရန် အထူးသင့်တော်ပါတယ်။',
      en: 'Featuring exquisite luster, this genuine pearl necklace is a wonderful anniversary keepsake.'
    }
  },

  // ================= PAGE 11: POWER STONES & SEAFOOD GIFTS =================
  {
    id: 'tuna_3_variety_tasting_set',
    page: 11,
    name: 'まぐろ3種食べ比べセット',
    furigana: 'まぐろ さんしゅ たべくらべ セット',
    ruby_name: 'まぐろ<ruby>3種食べ比べ<rt>さんしゅたべくらべ</rt></ruby>セット',
    name_my: 'တူနာငါးကို အရသာ ၃ မျိုးဖြင့် စီမံထားသော နာမည်ကျော် လက်ဆောင်ဘူးများ',
    name_en: 'Katsuura Tuna 3-Variety Gourmet Tasting Set',
    category: '調味料・特産品',
    price: 1680,
    description_ja: '勝浦漁港で水揚げされた新鮮なマグロを異なる3つの調理法（生姜煮、角煮、ピリ辛）で仕上げた贅沢な詰め合わせ。ご飯やお酒の肴に。',
    description_my: 'Nachi-Katsuura ဆိပ်ကမ်းထွက် လတ်ဆတ်သော တူနာငါးကို ဂျင်းပြုတ်၊ အတုံးကြော် စသည့် အရသာ ၃ မျိုးဖြင့် စီမံထားသော လက်ဆောင်ဘူး ဖြစ်ပါသည်။',
    description_en: 'Premium gift set featuring fresh Katsuura tuna prepared in 3 mouthwatering styles: ginger-simmered, braised cubes, and spicy.',
    icon: '🐟',
    badge: '勝浦港水揚げ名産',
    allergens: ['小麦', '大豆'],
    shelf_life_storage: '製造日より180日 / 常温保存',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '水揚げ', hiragana: 'みずあげ', myanmar: 'ပင်လယ်မှ ဖမ်းယူဆိုက်ကပ်ခြင်း', english: 'Landing of catch / Fresh catch' },
      { kanji: '食べ比べ', hiragana: 'たべくらべ', myanmar: 'အရသာ အမျိုးမျိုး နှိုင်းယှဉ်စားသုံးခြင်း', english: 'Tasting comparison' }
    ],
    service_pitch: {
      ja: '和歌山・勝浦のマグロの旨味がぎゅっと詰まっており、お酒のお供に最高でございます。',
      furigana: 'わかやま・かつうらのマグロのうまみがぎゅっとつまっており、おさけのおともにさいこうでございます。',
      my: 'Wakayama Katsuura တူနာငါး၏ အရသာအဆီအနှစ် အပြည့်ပါဝင်သောကြောင့် အရက်နှင့် တွဲဖက်သောက်ရန် အကောင်းဆုံး ဖြစ်ပါတယ်။',
      en: 'Packed with rich tuna flavor from Katsuura harbor; superb as a side for sake or warm rice.'
    }
  },

  // ================= PAGE 12: SOWA ORCHARD ARITA MIKAN PRODUCTS =================
  {
    id: 'sowa_ajimaro_juice_180',
    page: 12,
    name: '味まろしぼり 瓶入り',
    furigana: 'あじまろしぼり びんいり',
    ruby_name: '<ruby>味<rt>あじ</rt></ruby>まろしぼり <ruby>瓶入<rt>びんい</rt></ruby>り',
    name_my: 'ရေနှင့် သကြား လုံးဝမရောထားသော သဘာဝ အာရိဒ လိမ္မော်ရည် ပုလင်းငယ်များ',
    name_en: 'Ajimaro Shibori 100% Pure Arita Mandarin Orange Juice (180ml)',
    category: '有田みかん加工品',
    price: 430,
    description_ja: '和歌山有田の名門「早和果樹園」が誇る最高峰ジュース。外皮を剥いて果肉だけを優しく絞る独自製法により、水も砂糖も一滴も加えない天然100%の極上ジュース。',
    description_my: 'ဝါကာယာမ အာရိဒဒေသ၏ နာမည်ကျော် Sowa စိုက်ခင်းမှ လိမ္မော်သီးအခွံခွာ၍ အတွင်းအသားသက်သက် ညှစ်ထားသော ရေနှင့်သကြားလုံးဝမပါ ၁၀၀% သဘာဝဖျော်ရည် ဖြစ်ပါသည်။',
    description_en: '100% pure mandarin juice from Sowa Orchard. Only the peeled fruit pulp is squeezed without any added sugar or water.',
    icon: '🍊',
    badge: '無添加100%ストレート',
    allergens: ['なし'],
    shelf_life_storage: '製造日より1年 / 常温（開栓後要冷蔵）',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '果汁', hiragana: 'かじゅう', myanmar: 'သစ်သီးဖျော်ရည်စစ်စစ်', english: 'Fruit juice' },
      { kanji: '開栓後', hiragana: 'かいせんご', myanmar: 'ပုလင်းဖွင့်ပြီးနောက်', english: 'After opening' }
    ],
    service_pitch: {
      ja: 'お砂糖も水も使っていない、有田みかんそのままの甘みとコクをお楽しみいただけます。',
      furigana: 'おさとうもみずもつかっていない、ありだみかんそのままのあまみとコクをおたのしみいただけます。',
      my: 'သကြားနှင့် ရေ လုံးဝမသုံးဘဲ အာရိဒလိမ္မော်သီး မူရင်းအတိုင်း ချိုမြိန်လတ်ဆတ်မှုကို ခံစားနိုင်ပါတယ်။',
      en: 'No sugar or water added; enjoy the pure, natural sweetness and depth of fresh Arita oranges.'
    }
  },
  {
    id: 'sowa_temari_mikan_jelly',
    page: 12,
    name: 'てまりみかん / みかんジュレ',
    furigana: 'てまりみかん / みかんジュレ',
    ruby_name: 'てまりみかん / みかんジュレ',
    name_my: 'လိမ္မော်သီးတစ်လုံးလုံး ပါဝင်သော ဂျယ်လီ လက်ဆောင်သေတ္တာဘူးများ',
    name_en: 'Temari Mikan Whole Orange Luxury Fruit Jelly',
    category: '有田みかん加工品',
    price: 890,
    description_ja: '一口サイズの小さな完熟有田みかんが丸ごとゴロっとジュレの中に閉じ込められた見た目も美しい贅沢デザート。冷やすと絶品。',
    description_my: 'အာရိဒ လိမ္မော်သီးမှည့် တစ်လုံးလုံးကို ဂျယ်လီအကြည်ထဲတွင် ထည့်သွင်းထားသော လှပသပ်ရပ်သည့် လက်ဆောင်မုန့် ဖြစ်ပါသည်။ ရေခဲသေတ္တာထဲ အေးအောင်ထားစားရန် သင့်တော်ပါသည်။',
    description_en: 'Whole sweet ripe baby Arita oranges preserved in silky clear fruit jelly. Gorgeous visual appeal and extraordinarily refreshing when chilled.',
    icon: '✨',
    badge: '早和果樹園名物',
    allergens: ['なし'],
    shelf_life_storage: '製造日より6ヶ月 / 常温（冷やすと美味）',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '丸ごと', hiragana: 'まるごと', myanmar: 'တစ်လုံးလုံး / အလုံးလိုက်', english: 'Whole / In entirety' },
      { kanji: '完熟', hiragana: 'かんじゅく', myanmar: 'အပြည့်အဝ မှည့်ဝင်းနေသော', english: 'Fully ripe' }
    ],
    service_pitch: {
      ja: 'みかんが丸ごと入っておりまして、スプーンですくって食べる贅沢なデザートでございます。',
      furigana: 'みかんがまるごとはいっておりまして、スプーンですくってたべるぜいたくなデザートでございます。',
      my: 'လိမ္မော်သီးတစ်လုံးလုံး ပါဝင်ပြီး ဇွန်းဖြင့်ခပ်စားရသော အဆင့်မြင့် အချိုပွဲမုန့် ဖြစ်ပါတယ်။',
      en: 'Featuring whole oranges inside, this is an indulgent dessert best enjoyed with a spoon when chilled.'
    }
  },
  {
    id: 'sowa_mika_pon',
    page: 12,
    name: 'みかポン',
    furigana: 'みかポン',
    ruby_name: 'みかポン',
    name_my: 'အာရိဒ လိမ္မော်ရည်ဖြင့် ဖျော်စပ်ထားသော ဂျပန်ရိုးရာ ပွန်ဇူး အချဉ်ဆော့စ် ပုလင်းများ',
    name_en: 'Mika-Pon (Arita Mikan Citrus Ponzu Dipping Sauce)',
    category: '有田みかん加工品',
    price: 650,
    description_ja: '有田みかん果汁をベースに、本醸造醤油と柚子・すだち果汁を絶妙にブレンドしたフルーティーなポン酢。お鍋や焼肉、サラダに。',
    description_my: 'အာရိဒ လိမ္မော်ရည်နှင့် ဂျပန်ပဲငံပြာရည်စစ်စစ်တို့ကို ပေါင်းစပ်ထားသော အသုပ်နှင့် ဟော့ပေါ့ (Shabu-shabu) သုံး အချဉ်ဆော့စ် ဖြစ်ပါသည်။',
    description_en: 'Fruity, versatile ponzu dipping sauce crafted with fresh Arita mikan juice, authentic soy sauce, and aromatic Japanese citrus.',
    icon: '🥗',
    badge: '万能柑橘ポン酢',
    allergens: ['小麦', '大豆'],
    shelf_life_storage: '製造日より1年 / 常温保存',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: 'ポン酢', hiragana: 'ぽんず', myanmar: 'ဂျပန် ရှောက်ရည်စပ် အချဉ်ဆော့စ်', english: 'Ponzu citrus sauce' },
      { kanji: '鍋料理', hiragana: 'なべりょうり', myanmar: 'ဟော့ပေါ့ ဟင်းလျာ', english: 'Hot pot cooking' }
    ],
    service_pitch: {
      ja: '普通のお酢よりツンとせず、みかんの甘みと爽やかな酸味がサラダやお鍋によく合います。',
      furigana: 'ふつうのおすよりツンとせず、みかんのあまみとさわやかなさんみがサラダやおなべによくあいます。',
      my: 'ရိုးရိုးရှာလကာရည်ထက် မစူးဘဲ လိမ္မော်သီးအချိုနှင့် ချဉ်ပြုံးပြုံးအရသာက အသုပ်နှင့် ဟော့ပေါ့တို့နှင့် အထူးလိုက်ဖက်ပါတယ်။',
      en: 'Milder than regular vinegar, the pleasant orange sweetness and zest make it superb for salads and hot pot.'
    }
  },

  // ================= PAGE 13: SWIMMING GOGGLES & TRAVEL ACCESSORIES =================
  {
    id: 'swimming_goggles_resort',
    page: 13,
    name: 'スイミングゴーグル（子供・大人用）',
    furigana: 'スイミングゴーグル',
    ruby_name: 'スイミングゴーグル',
    name_my: 'ကလေးနှင့် လူကြီးသုံး ရေကူးမျက်မှန် အမျိုးမျိုး (အပြာ၊ ပန်းရောင်၊ အကြည်ရောင်)',
    name_en: 'Shirahama Resort Swimming Goggles (Kids & Adults)',
    category: '雑貨・アパレル',
    price: 1350,
    description_ja: '白良浜やホテル温水プールで使える曇り止め加工付きUVカットゴーグル。子供用・大人用各色取り揃え。',
    description_my: 'Shirahama ကမ်းခြေနှင့် ဟိုတယ် ရေကူးကန်တွင် သုံးနိုင်သော UV ကာကွယ် ရေကူးမျက်မှန်များ ဖြစ်ပါသည်။',
    description_en: 'Anti-fog, UV-protective swimming goggles for Shirarahama beach or our heated hotel pool.',
    icon: '🥽',
    allergens: ['シリコン製'],
    shelf_life_storage: 'UVカット・くもり止め仕様',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '温水プール', hiragana: 'おんすいプール', myanmar: 'ရေနွေး ရေကူးကန်', english: 'Heated swimming pool' },
      { kanji: '曇り止め', hiragana: 'くもりどめ', myanmar: 'မျက်မှန် မငွေ့မမှုန်းစေသော နည်းပညာ', english: 'Anti-fog' }
    ],
    service_pitch: {
      ja: '当館の室内プールでも屋外の白良浜でもすぐにお使いいただけます。',
      furigana: 'とうかんのしつないプールでもおくがいのしららはまでもすぐにおつかいいただけます。',
      my: 'ကျွန်တော်တို့ ဟိုတယ်တွင်း ရေကူးကန်တွင်ဖြစ်စေ အပြင်ဘက် Shirarahama ကမ်းခြေတွင်ဖြစ်စေ ချက်ချင်း အသုံးပြုနိုင်ပါတယ်။',
      en: 'Ready to use immediately in our indoor pool or at outdoor Shirarahama beach.'
    }
  },

  // ================= PAGE 14: MIMICRY PANDA & SWIM RINGS =================
  {
    id: 'mimicry_walking_panda',
    page: 14,
    name: 'まねまねパンダ（こえマネ動くパンダ）',
    furigana: 'まねまねパンダ',
    ruby_name: 'まねまねパンダ',
    name_my: 'လူပြောသော စကားသံကို ပြန်လည်အတုယူပြောဆိုပြီး လမ်းလျှောက်တတ်သော လျှပ်စစ်ပန်ဒါအရုပ်',
    name_en: 'Mimicry Voice-Recording Walking Panda Robot Toy',
    category: 'パンダ・玩具',
    price: 2980,
    description_ja: '話しかけた言葉を可愛い声でオウム返ししながらトコトコ歩く大人気トイ。店頭POPには「パンダ たたかないで、やさしくしてね」と温かい注意書きがあります。',
    description_my: 'ဧည့်သည်ပြောသည့် စကားသံကို ချစ်စရာအသံဖြင့် ပြန်တုပြောပြီး လမ်းလျှောက်တတ်သော လျှပ်စစ်ပန်ဒါအရုပ် ဖြစ်ပါသည်။ "ပန်ဒါကို မရိုက်ပါနှင့်၊ ညင်သာစွာ ကိုင်တွယ်ပါ" ဟု ဆိုင်းဘုတ်တင်ထားပါသည်။',
    description_en: 'Extremely popular electronic toy that repeats whatever you say in a squeaky voice while walking. Store sign reminds: "Please be gentle, do not hit the panda!"',
    icon: '🐼',
    badge: '店頭実演大人気トイ',
    allergens: ['なし (単4電池別売)'],
    shelf_life_storage: '玩具 / 単4形乾電池3本使用（別売・売店で購入可能）',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '真似', hiragana: 'まね', myanmar: 'အတုယူခြင်း / လိုက်လုပ်ခြင်း', english: 'Mimicry / Imitation' },
      { kanji: '優しく', hiragana: 'やさしく', myanmar: 'ညင်သာစွာ / ကြင်နာစွာ', english: 'Gently / Kindly' }
    ],
    service_pitch: {
      ja: 'お話しした言葉をそのまま真似して歩く、お子様連れのご家族に大人気のぬいぐるみトイでございます。',
      furigana: 'おはなししたことばをそのまままねしてあるく、おこさまづれのごかぞくにだいにんきのぬいぐるみトイでございます。',
      my: 'ပြောလိုက်တဲ့ စကားကို အသံတုလုပ်ပြီး လမ်းလျှောက်တတ်တဲ့အတွက် ကလေးရှိသော မိသားစုများ အလွန်ကြိုက်ကြပါတယ်။',
      en: 'It repeats what you say and toddles along, making it a huge hit with visiting families with kids.'
    }
  },
  {
    id: 'shirahama_swim_rings',
    page: 14,
    name: '白浜リゾート浮き輪（50cm〜90cm 各種）',
    furigana: 'しらはまりぞーとうきわ',
    ruby_name: '<ruby>白浜<rt>しらはま</rt></ruby>リゾート<ruby>浮<rt>う</rt></ruby>き<ruby>輪<rt>わ</rt></ruby>',
    name_my: 'Shirahama ကမ်းခြေသွားသူများအတွက် ရေကူးဘောကွင်းများ (အရွယ်အစားစုံ)',
    name_en: 'Shirahama Beach Resort Swim Rings (50cm to 90cm)',
    category: '雑貨・アパレル',
    price: 1500,
    description_ja: '白良浜ビーチで遊ぶお客様のための浮き輪。幼児用50cm（パンダ柄）、小児用60-70cm、大人用80-90cm（ブルーモンステラ、グリッターピンク等）を網羅。',
    description_my: 'Shirahama ကမ်းခြေသို့ သွားရောက်လည်ပတ်သူများအတွက် ကလေးသုံး ၅၀ စင်တီမီတာ ပန်ဒါပုံမှသည် လူကြီးသုံး ၉၀ စင်တီမီတာအထိ စနစ်တကျ ရောင်းချပေးထားသော ဘောကွင်းများ ဖြစ်ပါသည်။',
    description_en: 'Swim rings for visitors heading to Shirarahama beach. Ranging from 50cm panda kids rings to 90cm adult designer rings (Blue Monstera, Glitter).',
    icon: '🛟',
    badge: '白良浜ビーチ必須',
    allergens: ['塩化ビニル樹脂'],
    shelf_life_storage: '玩具安全基準合格（STマーク）/ 救命具ではありません',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '浮き輪', hiragana: 'うきわ', myanmar: 'ရေကူးဘောကွင်း', english: 'Swim ring' },
      { kanji: '救命具', hiragana: 'きゅうめいぐ', myanmar: 'အသက်ကယ်ကိရိယာ', english: 'Lifesaving equipment' }
    ],
    service_pitch: {
      ja: '白良浜の海で遊ばれるお客様に必須のアイテムで、お子様から大人用までサイズ豊富に揃えております。',
      furigana: 'しららはまのうみであそばれるおきゃくさまにひっすのアイテムで、おこさまからおとなようまでサイズほうふにそろえております。',
      my: 'Shirarahama ကမ်းခြေတွင် ရေဆော့ကစားမည့် ဧည့်သည်များအတွက် မရှိမဖြစ် ပစ္စည်းဖြစ်ပြီး ဆိုဒ်အစုံ ရှိပါတယ်။',
      en: 'An essential item for guests enjoying Shirarahama beach, well stocked in all sizes from toddlers to adults.'
    }
  },

  // ================= PAGE 15: KUMANO KODO SWEETS & POPULAR SAMPLES =================
  {
    id: 'kumano_kodo_monogatari',
    page: 15,
    name: '熊野古道物語',
    furigana: 'くまのこどう ものがたり',
    ruby_name: '<ruby>熊野古道<rt>くまのこどう</rt></ruby><ruby>物語<rt>ものがたり</rt></ruby>',
    name_my: 'ကူမာနိုကိုဒို ပုံပြင် မုန့်ကြွပ်ဝေဖာ ဘူးများ (အသေး၊ အလတ်၊ အကြီး)',
    name_en: 'Kumano Kodo Story Crispy Wafers (S/M/L)',
    category: '和菓子・スイーツ',
    price: 1290,
    description_ja: '世界遺産・熊野古道の歴史をイメージしたサクサク香ばしいウエハース菓子。小箱・中箱・大箱と人数に合わせて選べます。',
    description_my: 'ကမ္ဘာ့အမွေအနှစ် Kumano Kodo လမ်းဟောင်းသမိုင်းကို အစွဲပြုထားသော မုန့်ကြွပ်ဘူးများဖြစ်ပြီး ဘူးသေး၊ ဘူးလတ်၊ ဘူးကြီး အရွယ် ၃ မျိုး ရရှိနိုင်ပါသည်။',
    description_en: 'Crispy wafer sweet themed after the World Heritage Kumano Kodo pilgrimage trails. Available in Small, Medium, and Large boxes.',
    icon: '⛩️',
    badge: '世界遺産記念銘菓',
    allergens: ['小麦', '卵', '乳'],
    shelf_life_storage: '製造日より90日 / 常温保存',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '世界遺産', hiragana: 'せかいいさん', myanmar: 'ကမ္ဘာ့အမွေအနှစ်', english: 'World Heritage' },
      { kanji: '人数', hiragana: 'にんずう', myanmar: 'လူဦးရေ / အရေအတွက်', english: 'Number of people' }
    ],
    service_pitch: {
      ja: '大容量の箱もございますので、職場やグループへのお配り用に最適でございます。',
      furigana: 'だいようりょうのはこもございますので、しょくばやグループへのおくばりようにさいてきでございます。',
      my: 'ဘူးကြီးဆိုဒ်လည်း ရှိသောကြောင့် လုပ်ငန်းခွင် သို့မဟုတ် အဖွဲ့လိုက် ဝေငှပေးရန် အထူးသင့်တော်ပါတယ်။',
      en: 'With large box sizes available, this is perfect for sharing with office colleagues or large groups.'
    }
  },
  {
    id: 'panda_milk_manju',
    page: 15,
    name: 'パンダ ミルクまんじゅう',
    furigana: 'パンダ ミルクまんじゅう',
    ruby_name: 'パンダ ミルク<ruby>饅頭<rt>まんじゅう</rt></ruby>',
    name_my: 'ပန်ဒါမျက်နှာပုံစံ နို့နှင့်ပဲအနှစ်ချိုမွှေး မုန့်လုံးမုန့်',
    name_en: 'Panda Milk Steamed Bun (Manju)',
    category: '和菓子・スイーツ',
    price: 880,
    description_ja: '愛らしいパンダの顔を型取ったしっとりお饅頭。ミルクと白あんをブレンドした優しい甘さで、小箱と大箱の2サイズがございます。',
    description_my: 'ချစ်စဖွယ် ပန်ဒါမျက်နှာပုံစံ ပြုလုပ်ထားပြီး နို့နှင့် ပဲအနှစ်ချိုချိုမွှေးမွှေး သွတ်ထားသော မုန့်လုံးမုန့်ဘူးများ ဖြစ်ပါသည်။ ဘူးသေးနှင့် ဘူးကြီး ၂ မျိုး ရှိပါသည်။',
    description_en: 'Adorable panda-faced steamed cakes filled with creamy milk and sweet white bean paste. Available in small and large gift boxes.',
    icon: '🐼',
    badge: '見本付き人気スイーツ',
    allergens: ['小麦', '卵', '乳', '大豆'],
    shelf_life_storage: '製造日より60日 / 常温保存',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '饅頭', hiragana: 'まんじゅう', myanmar: 'ဂျပန် မုန့်လုံးမုန့်', english: 'Manju (Steamed bun)' },
      { kanji: '愛らしい', hiragana: 'あいらしい', myanmar: 'ချစ်စဖွယ်ကောင်းသော', english: 'Adorable' }
    ],
    service_pitch: {
      ja: 'パンダの見た目も可愛らしく、お子様へのお土産に大変喜ばれます。',
      furigana: 'パンダのみためもかわいらしく、おこさまへのおみやげにたいへんよろこばれます。',
      my: 'ပန်ဒါပုံစံလေးက ချစ်စရာကောင်းပြီး ကလေးများအတွက် လက်ဆောင်ပေးရန် အထူးသင့်တော်ပါတယ်။',
      en: 'The panda design is very cute, making it a delightful gift for children.'
    }
  },
  {
    id: 'ume_habutae_mochi',
    page: 15,
    name: '梅羽二重餅',
    furigana: 'うめはぶたえもち',
    ruby_name: '<ruby>梅<rt>うめ</rt></ruby><ruby>羽二重餅<rt>はぶたえもち</rt></ruby>',
    name_my: 'Wakayama ဆီးသီးအရသာ ပါးစပ်ထဲအရည်ပျော်သွားမတတ် နူးညံ့အိစက်သော မုန့်လုံးစေး',
    name_en: 'Ume Habutae Mochi (Plum Silk Mochi)',
    category: '和菓子・スイーツ',
    price: 1100,
    description_ja: '和歌山県産紀州南高梅のほのかな酸味と香りを練り込んだ、絹のように滑らかでとろけるような口どけの羽二重餅。',
    description_my: 'Wakayama နန်ခိုးဆီးသီး အရသာသင်းပျံ့ပြီး ပါးစပ်ထဲတွင် အရည်ပျော်သွားမတတ် နူးညံ့အိစက်သော ဂျပန်ရိုးရာ မုန့်လုံးစေး အနီရောင်ဘူးများ ဖြစ်ပါသည်။',
    description_en: 'Silky smooth Habutae mochi delicately infused with the gentle tartness and aroma of Kishu Nanko plums.',
    icon: '🍡',
    badge: '見本付き人気スイーツ',
    allergens: ['大豆'],
    shelf_life_storage: '製造日より45日 / 常温保存',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '羽二重餅', hiragana: 'はぶたえもち', myanmar: 'ပိုးသားကဲ့သို့ နူးညံ့သော ဂျပန်မုန့်စေး', english: 'Habutae silky mochi' },
      { kanji: '酸味', hiragana: 'さんみ', myanmar: 'အချဉ်ဓာတ်', english: 'Acidity / Tartness' }
    ],
    service_pitch: {
      ja: '紀州梅の爽やかな風味ともちもちの食感が女性に大好評でございます。',
      furigana: 'きしゅううめのさわやかなふうみともちもちのしょっかんがじょせいにだいこうひょうでございます。',
      my: 'Kishu ဆီးသီး၏ လန်းဆန်းသောအရသာနှင့် အိစက်စေးပိုင်သော အထိအတွေ့ကြောင့် အမျိုးသမီးများ အထူးကြိုက်ကြပါတယ်။',
      en: 'The refreshing Kishu plum flavor and chewy texture are exceptionally popular among female guests.'
    }
  },
  {
    id: 'wakayama_pudding_tart_cookie',
    page: 15,
    name: '和歌山 ぷりんタルトクッキー',
    furigana: 'わかやま ぷりんタルトクッキー',
    ruby_name: '<ruby>和歌山<rt>わかやま</rt></ruby> ぷりんタルトクッキー',
    name_my: 'Custard ပူတင်း အရသာမွှေးကြိုင်ပြီး မုန့်ကြွပ်ကွတ်ကီးအပြားများ ပါဝင်သော ဘူး',
    name_en: 'Wakayama Custard Pudding Tart Cookies',
    category: '和菓子・スイーツ',
    price: 1180,
    description_ja: '香ばしいタルト生地に濃厚なカスタードプリン風味のチョコクリームを流し込んだ、贅沢な焼き菓子。シックな黒箱パッケージ。',
    description_my: 'Custard ပူတင်း အရသာ မွှေးကြိုင်ပြီး အောက်ခံမုန့်ကြွပ် ကွတ်ကီးအပြားများ ပါဝင်သော အနက်ရောင်ဘူးများ ဖြစ်ပါသည်။',
    description_en: 'Crispy tart crust filled with rich custard pudding cream chocolate. Elegantly packaged in a black gift box.',
    icon: '🍮',
    badge: '見本付き人気スイーツ',
    allergens: ['小麦', '卵', '乳', '大豆'],
    shelf_life_storage: '製造日より90日 / 常温保存',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '濃厚', hiragana: 'のうこう', myanmar: 'ပြစ်ပြစ်နှစ်နှစ် / အရသာပြည့်ဝသော', english: 'Rich / Creamy' },
      { kanji: '風味', hiragana: 'ふうみ', myanmar: 'အရသာနှင့်ရနံ့', english: 'Flavor profile' }
    ],
    service_pitch: {
      ja: '濃厚なプリンの甘みとサクサクのタルト生地が絶妙でございます。',
      furigana: 'のうこうなプリンのあまみとサクサクのタルトきじがぜつみょうでございます。',
      my: 'ပြည့်ဝသော ပူတင်းအချိုအရသာနှင့် ကြွပ်ရွသော မုန့်လွှာတို့ လိုက်ဖက်ညီလှပါတယ်။',
      en: 'The rich custard sweetness paired with the crispy tart crust is truly exquisite.'
    }
  },
  {
    id: 'wakayama_panda_langue_de_chat',
    page: 15,
    name: '和歌山 パンダ ラングドシャ',
    furigana: 'わかやま パンダ ラングドシャ',
    ruby_name: '<ruby>和歌山<rt>わかやま</rt></ruby> パンダ ラングドシャ',
    name_my: 'ပန်ဒါ ၃ ကောင်ပုံပါ အဖြူရောင်ချောကလက်ညှပ် ကွတ်ကီးပြား လက်ဆောင်ဘူး',
    name_en: 'Wakayama Panda Langue de Chat Cookies',
    category: '和菓子・スイーツ',
    price: 1200,
    description_ja: '仲良く寄り添う3頭のパンダイラストが可愛いパッケージ。サクサクの薄焼きクッキーでホワイトチョコレートをサンド。',
    description_my: 'ပန်ဒါ ၃ ကောင် ပွေ့ဖက်နေသော ချစ်စရာ ပုံပါဝင်ပြီး အဖြူရောင် ချောကလက်ညှပ် ကွတ်ကီးပြား လက်ဆောင်ဘူးများ ဖြစ်ပါသည်။',
    description_en: 'French-style crisp langue de chat butter cookies sandwiching smooth white chocolate, decorated with cute hugging pandas.',
    icon: '🐼',
    badge: '見本付き人気スイーツ',
    allergens: ['小麦', '卵', '乳', '大豆'],
    shelf_life_storage: '製造日より120日 / 常温保存',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '薄焼き', hiragana: 'うすやき', myanmar: 'ပါးပါးလေးဖုတ်ထားသော', english: 'Thinly baked' },
      { kanji: '寄り添う', hiragana: 'よりそう', myanmar: 'နီးနီးကပ်ကပ် ပွေ့ဖက်နေသော', english: 'Snuggled together' }
    ],
    service_pitch: {
      ja: '個包装で配りやすく、ホワイトチョコの口どけが素晴らしい人気商品です。',
      furigana: 'こほうそうでくばりやすく、ホワイトチョコのくちどけがすばらしいにんきしょうひんです。',
      my: 'တစ်ခုချင်းစီ ထုပ်ပိုးထား၍ ဝေမျှရန် လွယ်ကူပြီး White Chocolate အရည်ပျော်မှု ကောင်းမွန်ပါတယ်။',
      en: 'Individually wrapped for easy sharing, featuring delightfully smooth white chocolate.'
    }
  },

  // ================= PAGE 16: PREMIUM GIFTS & PANDA CONFECTIONERY =================
  {
    id: 'panda_milk_cake_sable',
    page: 16,
    name: 'パンダミルクケーキ・パンダサブレ',
    furigana: 'パンダミルクケーキ・パンダサブレ',
    ruby_name: 'パンダミルクケーキ・パンダサブレ',
    name_my: 'ပန်ဒါရုပ် ကာတွန်းပုံများ စီတန်းပါဝင်ပြီး နို့အရသာ ကိတ်နှင့် ဘီစကစ်ဘူးများ',
    name_en: 'Panda Milk Cake & Crunchy Butter Panda Sable',
    category: '和菓子・スイーツ',
    price: 980,
    description_ja: 'パンダのイラストが愛らしいしっとりミルクケーキとサクサクのサブレ。子どもから大人まで親しまれる優しい味。',
    description_my: 'ချစ်စဖွယ် ပန်ဒါရုပ်များပါဝင်ပြီး ကလေး၊ လူကြီး အားလုံး ကြိုက်နှစ်သက်သော နို့အရသာ ကိတ်နှင့် ဘီစကစ်ဘူးများ ဖြစ်ပါသည်။',
    description_en: 'Soft milk cakes and buttery sable cookies featuring cute panda characters.',
    icon: '🍪',
    allergens: ['小麦', '卵', '乳'],
    shelf_life_storage: '製造日より60日 / 常温保存',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '親しまれる', hiragana: 'したしまれる', myanmar: 'လူတိုင်း ချစ်ခင်နှစ်သက်သော', english: 'Beloved / Popular' }
    ],
    service_pitch: {
      ja: '世代を問わず喜ばれるお味で、可愛らしいパンダの箱が人気です。',
      furigana: 'せだいをとわずよろこばれるおあじで、かわいらしいパンダのはこがにんきです。',
      my: 'လူကြီးရော ကလေးပါ ကြိုက်နှစ်သက်သော အရသာဖြစ်ပြီး ချစ်စရာ ပန်ဒါဘူးကြောင့် လူကြိုက်များပါတယ်။',
      en: 'Enjoyed across all generations, packaged in a charming collectible panda box.'
    }
  },

  // ================= PAGE 17: PLUSHIES & RAINWEAR =================
  {
    id: 'giant_panda_plush_sizes',
    page: 17,
    name: 'パンダのぬいぐるみ（大・中・小・マスコット）',
    furigana: 'パンダのぬいぐるみ',
    ruby_name: 'パンダのぬいぐるみ',
    name_my: 'ပန်ဒါဝက်ဝံ အဝတ်ရုပ်များ (ဆိုဒ်အစုံ- ဆိုဒ်ကြီး၊ ဆိုဒ်လတ်၊ ဆိုဒ်သေး၊ သော့ချိတ်)',
    name_en: 'Giant Panda Plush Toys (Large, Medium, Small, Keychain)',
    category: 'パンダ・玩具',
    price: 1800,
    description_ja: '白浜の象徴・ジャイアントパンダの高品質ぬいぐるみ。ぎゅっと抱きしめられる特大サイズからカバンにつけられるマスコットまで豊富。',
    description_my: 'Wakayama Shirahama ၏ သင်္ကေတဖြစ်သော Giant Panda အဝတ်ရုပ်များဖြစ်ပြီး ဖက်အိပ်ရန် ဆိုဒ်ကြီးမှစ၍ အိတ်တွင်ချိတ်ရန် သော့ချိတ်အထိ အရွယ်အစားစုံလင်စွာ ရှိပါသည်။',
    description_en: 'High-quality giant panda plushes representing Shirahama. Available from huggable giant sizes to mini bag charm mascots.',
    icon: '🧸',
    badge: '白浜シンボル',
    allergens: ['なし'],
    shelf_life_storage: 'ポリエステル製 / 手洗い可能',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: 'ぬいぐるみ', hiragana: 'ぬいぐるみ', myanmar: 'ဂွမ်း/ချည်ထည့် အဝတ်ရုပ်', english: 'Plush toy / Stuffed animal' },
      { kanji: '象徴', hiragana: 'しょうちょう', myanmar: 'အထိမ်းအမှတ် သင်္ကေတ', english: 'Symbol' }
    ],
    service_pitch: {
      ja: '手触りがとても柔らかく、白浜旅行の一番の思い出として連れて帰っていただけます。',
      furigana: 'てざわりがとてもやわらかく、しらはまりょこうのいちばんのおもいでとしてつれてかえっていただけます。',
      my: 'ကိုင်တွယ်ရတာ အလွန်နူးညံ့ပြီး ရှီရာဟာမခရီးစဉ်၏ အမှတ်တရအဖြစ် ဝယ်ယူသိမ်းဆည်းနိုင်ပါတယ်။',
      en: 'Wonderfully soft to the touch, serving as the very best keepsake from your Shirahama trip.'
    }
  },
  {
    id: 'panda_pattern_umbrella',
    page: 17,
    name: 'パンダ柄の傘（雨具）',
    furigana: 'パンダがらの かさ',
    ruby_name: 'パンダ<ruby>柄<rt>がら</rt></ruby>の<ruby>傘<rt>かさ</rt></ruby>',
    name_my: 'ပန်ဒါရုပ်ပုံပါ မိုးကာထီး (မိုးရာသီသုံးပစ္စည်း - အမှတ်တရရောင်းကုန်)',
    name_en: 'Panda Pattern Souvenir Umbrella',
    category: '雑貨・アパレル',
    price: 1200,
    description_ja: '白浜のパンダが散りばめられた可愛らしい雨傘。※正面玄関の貸出傘（無料）とは異なり、売店のお土産販売商品です。',
    description_my: 'ပန်ဒါရုပ်လေးများ ပါဝင်သော ချစ်စရာ မိုးကာထီး ဖြစ်ပါသည်။ (ဟိုတယ်အဝင်ပေါက်ရှိ အခမဲ့ထီးများနှင့် မတူဘဲ အရောင်းဆိုင် အမှတ်တရ ရောင်းကုန်ပစ္စည်း ဖြစ်ပါသည်။)',
    description_en: 'Cute rain umbrella scattered with Shirahama panda motifs. Sold as a souvenir (free loan umbrellas are at the front lobby).',
    icon: '☂️',
    allergens: ['なし'],
    shelf_life_storage: 'ポリエステル・スチール骨 / 長傘58cm',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '雨具', hiragana: 'あまぐ', myanmar: 'မိုးကာပစ္စည်း', english: 'Rain gear' },
      { kanji: '貸出', hiragana: 'かしだし', myanmar: 'ငှားရမ်းပေးခြင်း', english: 'Lending / Rental' }
    ],
    service_pitch: {
      ja: '外出用の無料貸出傘は正面玄関にございます。こちらは記念のお土産用パンダ傘でございます。',
      furigana: 'がいしゅつようのむりょうかしだしかさはしょうめんげんかんにございます。こちらはきねんのおみやげようパンダがさでございます。',
      my: 'အပြင်ထွက်ရန် အခမဲ့ငှားသောထီးများသည် ဟိုတယ်အဝင်ပေါက်တွင် ရှိပြီး၊ ဤထီးသည် အမှတ်တရ လက်ဆောင်ပစ္စည်း ဖြစ်ပါတယ်။',
      en: 'Free umbrellas for going out are at the main entrance; this panda umbrella is a souvenir available for purchase.'
    }
  },

  // ================= PAGE 18: TAKASAGO ARARE & COFFEE =================
  {
    id: 'takasago_arare_bags',
    page: 18,
    name: '紀州名物「高砂アラレ」（袋入り各フレーバー）',
    furigana: 'きしゅうめいぶつ たかさごアラレ',
    ruby_name: '<ruby>紀州名物<rt>きしゅうめいぶつ</rt></ruby>「<ruby>高砂<rt>たかさご</rt></ruby>アラレ」',
    name_my: 'ကိရှူးဒေသ ထွက်ကုန် အထူးအဆန်း "တာကာဆာဂို အာရာရဲ" ဆန်မုန့်ကြွပ် (အီတလီစတိုင်စပ်စပ်၊ မရိုနိစ်၊ ရိုးရာ)',
    name_en: 'Kishu Specialty Takasago Arare Rice Crackers (Italian Spicy, Mayo, Classic Soy)',
    category: 'スナック・おつまみ',
    price: 420,
    description_ja: '和歌山伝統の香ばしいもち米あられ。上段のイタリアン風スパイシー味、マヨネーズ味、伝統の醤油味など多彩なフレーバーが揃っています。',
    description_my: 'Wakayama ရိုးရာ ကောက်ညှင်းဆန်မုန့်ကြွပ် ဖြစ်ပြီး အီတလီစတိုင်စပ်စပ်၊ မရိုနိစ်အရသာနှင့် ရိုးရာပဲငံပြာရည်အရသာ စုံလင်စွာ ရှိပါသည်။',
    description_en: 'Traditional roasted glutinous rice crackers in exciting gourmet flavors: Italian spicy herbs, rich mayonnaise, and classic soy sauce.',
    icon: '🍘',
    badge: '紀州伝統あられ',
    allergens: ['小麦', '大豆', '卵'],
    shelf_life_storage: '製造日より120日 / 常温保存',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '名物', hiragana: 'めいぶつ', myanmar: 'ဒေသထွက် နာမည်ကြီးကုန်ပစ္စည်း', english: 'Famous specialty' },
      { kanji: 'あられ', hiragana: 'あられ', myanmar: 'ဆန်မုန့်ကြွပ်အသေးစား', english: 'Roasted rice crackers' }
    ],
    service_pitch: {
      ja: 'イタリアン味やマヨネーズ味など珍しいフレーバーが多く、おつまみに大人気でございます。',
      furigana: 'イタリアンあじやマヨネーズあじなどめずらしいフレーバーがおおく、おつまみにだいにんきでございます。',
      my: 'အီတလီစတိုင်နှင့် မရိုနိစ်အရသာကဲ့သို့ ထူးခြားသော အရသာများစွာရှိပြီး ဘီယာနှင့်တွဲစားရန် အလွန်ကောင်းမွန်ပါတယ်။',
      en: 'Offers unique flavors like Italian herb and mayonnaise, wildly popular as beer snacks.'
    }
  },

  // ================= PAGE 19: LUCKY CHARMS, HOTEL WI-FI & TAKKYUBIN =================
  {
    id: 'lucky_owl_fukuro_strap',
    page: 19,
    name: '幸福を呼ぶフクロウ根付ストラップ（福郎・十二支）',
    furigana: 'こうふくをよぶ フクロウ ねつけ ストラップ',
    ruby_name: '<ruby>幸福<rt>こうふく</rt></ruby>を<ruby>呼<rt>よ</rt></ruby>ぶ フクロウ<ruby>根付<rt>ねつけ</rt></ruby>ストラップ',
    name_my: 'ကံကောင်းခြင်း ယူဆောင်လာသော ဇီးကွက်အဆောင်ကြိုး (ဖူကူရိုး / ၁၂ ရာသီခွင်)',
    name_en: 'Lucky Owl "Fukuro" Japanese Nettsuke Charm',
    category: '縁起物・ホテルサービス',
    price: 660,
    description_ja: '「不苦労（苦労知らず）」「福籠（福が籠もる）」に通じる縁起物。首が360度回ることから商売繁盛、夜目が利くことから厄除けなど4大御利益があります。',
    description_my: 'ကံကောင်းခြင်း ယူဆောင်လာသော ရွှေရောင်ဇီးကွက် အဆောင်ကြိုးလေးများ ဖြစ်ပါသည်။ ပညာရေး၊ စီးပွားရေး၊ ကျန်းမာရေးနှင့် ဘေးအန္တရာယ်ကာကွယ်ရေး ကောင်းကျိုး ၄ မျိုး ရှိပါသည်။',
    description_en: 'A traditional auspicious charm. Owl (Fukuro) symbolizes "no hardship" and brings 4 blessings: wisdom, 360-degree business success, longevity, and night-vision protection.',
    icon: '🦉',
    badge: '開運厄除け4大御利益',
    allergens: ['なし'],
    shelf_life_storage: '金属・紐製 / 12干支デザイン対応',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '縁起物', hiragana: 'えんぎもの', myanmar: 'ကံကောင်းစေသော အဆောင်ပစ္စည်း', english: 'Lucky charm' },
      { kanji: '商売繁盛', hiragana: 'しょうばいはんじょう', myanmar: 'စီးပွားရေး တိုးတက်အောင်မြင်ခြင်း', english: 'Business prosperity' }
    ],
    service_pitch: {
      ja: 'フクロウは不苦労とも言いまして、首が360度回ることから金運や厄除けの縁起物として大人気です。',
      furigana: 'フクロウはふくろうともいいまして、くびがさんびゃくろくじゅうどまわることからきんうんややくよけのえんぎものとしてだいにんきです。',
      my: 'ဇီးကွက်သည် လည်ပင်း ၃၆၀ ဒီဂရီ လှည့်နိုင်သဖြင့် ငွေကြေးကံကောင်းစေပြီး ဘေးရန်ကာကွယ်ပေးသော အဆောင်အဖြစ် လူကြိုက်များပါတယ်။',
      en: 'The owl represents "no hardship" and turning 360 degrees brings wealth and safety from misfortune.'
    }
  },
  {
    id: 'hotel_takkyubin_service',
    page: 19,
    name: 'ホテル宅急便受付サービス（ヤマト運輸）',
    furigana: 'ホテル たっきゅうびん うけつけ サービス',
    ruby_name: 'ホテル<ruby>宅急便受付<rt>たっきゅうびん うけつけ</rt></ruby>サービス',
    name_my: 'ဟိုတယ် ပါဆယ်အိတ် ပို့ဆောင်ရေး ဝန်ဆောင်မှု (Yamato Takkyubin)',
    name_en: 'Hotel Front Luggage & Souvenir Courier Shipping Service',
    category: '縁起物・ホテルサービス',
    price: 1500,
    description_ja: '売店でご購入いただいた大量のお土産やスーツケースをご自宅・空港まで配送可能。専用段ボール箱や送り状（元払い・着払い）をご用意しております。',
    description_my: 'အရောင်းဆိုင်တွင် ဝယ်ယူထားသော လက်ဆောင်ပစ္စည်းများနှင့် ခရီးဆောင်အိတ်များကို နေအိမ်သို့ ပြန်လည်ပို့ဆောင်ပေးသော Yamato ပို့ဆောင်ရေး ဝန်ဆောင်မှု ဖြစ်ပါသည်။',
    description_en: 'Ship your heavy souvenirs and suitcases straight home or to the airport. Shipping boxes and waybills (prepaid/cash on delivery) provided.',
    icon: '📦',
    badge: '売店・フロント受付',
    allergens: ['なし'],
    shelf_life_storage: '売店レジまたはフロントカウンターにて受付（集荷: 毎日16:00頃）',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '宅急便', hiragana: 'たっきゅうびん', myanmar: 'အမြန်ပါဆယ်ပို့ဆောင်ရေး', english: 'Express courier delivery' },
      { kanji: '送り状', hiragana: 'おくりじょう', myanmar: 'ပို့ဆောင်ရေး လိပ်စာဖောင် (ဘောက်ချာ)', english: 'Shipping invoice / Waybill' }
    ],
    service_pitch: {
      ja: 'たくさんお土産をお買い上げいただいても、ご自宅まで宅急便でお送りできますのでご安心ください。',
      furigana: 'たくさんおみやげをおかいあげいただいても、ごじたくまでたっきゅうびんでおおくりできますのでごあんしんください。',
      my: 'လက်ဆောင်ပစ္စည်းများ အများအပြား ဝယ်ယူထားသော်လည်း နေအိမ်အရောက် အမြန်ချောပို့ဖြင့် ပို့ဆောင်ပေးနိုင်ပါသဖြင့် စိတ်အေးလက်အေး ဝယ်ယူနိုင်ပါတယ်။',
      en: 'Even if you purchase many souvenirs, we can conveniently ship them straight to your home.'
    }
  },
  {
    id: 'salon_de_royal_pecan',
    page: 19,
    name: 'サロンドロワイヤル 3種の贅沢ピーカンナッツ',
    furigana: 'サロンドロワイヤル さんしゅのぜいたくピーカンナッツ',
    ruby_name: 'サロンドロワイヤル <ruby>3種<rt>さんしゅ</rt></ruby>の<ruby>贅沢<rt>ぜいたく</rt></ruby>ピーカンナッツ',
    name_my: 'Salon de Royal ပီကန်နတ် ချောကလက် ၃ မျိုး လက်ဆောင် package ဘူး',
    name_en: 'Salon de Royal Luxury 3-Variety Pecan Nut Chocolates',
    category: '和菓子・スイーツ',
    price: 1980,
    description_ja: '全国菓子博覧会で名誉総裁賞を受賞した最高級ショコラ。①キャンディコート ②抹茶 ③ココアがけの3種アソートギフトボックス。',
    description_my: 'နာမည်ကြီး Salon de Royal မှထုတ်လုပ်သော အဆင့်မြင့် Pecan Nut ချောကလက် ၃ မျိုး (Candy Coated၊ Matcha လက်ဖက်စိမ်း၊ Cocoa) လက်ဆောင်ဘူး ဖြစ်ပါသည်။',
    description_en: 'Award-winning luxury chocolate coated pecan nuts in 3 exquisite flavors: Candy Coated, Matcha, and Cocoa.',
    icon: '🍫',
    badge: '高級特設コーナー',
    allergens: ['乳', '大豆', 'くるみ'],
    shelf_life_storage: '製造日より180日 / 常温（28℃以下）',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '受賞', hiragana: 'じゅしょう', myanmar: 'ဆုရရှိခြင်း', english: 'Award-winning' },
      { kanji: '最高級', hiragana: 'さいこうきゅう', myanmar: 'အမြင့်မားဆုံးအဆင့်', english: 'Highest grade / Luxury' }
    ],
    service_pitch: {
      ja: '当館特設コーナーでも一番人気の高級ショコラで、大切な方への贈答品に自信を持ってお勧めいたします。',
      furigana: 'とうかんとくせつコーナーでもいちばんにんきのこうきゅうショコラで、たいせつなかたへのぞうとうひんにじしんをもっておおすすめいたします。',
      my: 'ဟိုတယ်အထူးကောင်တာတွင် အလူကြိုက်အများဆုံး အဆင့်မြင့်ချောကလက်ဖြစ်ပြီး အရေးကြီးသောပုဂ္ဂိုလ်များအတွက် လက်ဆောင်အဖြစ် အထူးအကြံပြုအပ်ပါတယ်။',
      en: 'The top-selling luxury chocolate at our special counter, highly recommended as a premium gift.'
    }
  },

  // ================= PAGE 20: KAGEROU CORNER, CHEF CURRY & GACHAPON =================
  {
    id: 'cha_kagerou',
    page: 20,
    name: '茶かげろう',
    furigana: 'ちゃかげろう',
    ruby_name: '<ruby>茶<rt>ちゃ</rt></ruby>かげろう',
    name_my: 'လက်ဖက်စိမ်း Kagero မုန့်',
    name_en: 'Cha-Kagerou (Matcha Cream)',
    category: '和菓子・スイーツ',
    price: 1180,
    description_ja: '京都宇治の上質な抹茶クリームを贅沢にサンドした「かげろう」の抹茶プレミアムバージョン。ほろ苦い抹茶と上品な甘みが調和しています。',
    description_my: 'အဆင့်မြင့် ဂျပန်လက်ဖက်စိမ်း မတ်ချာခရင်မ် ထည့်သွင်းထားသော ပရီမီယမ် မုန့်ဖြစ်ပြီး ချိုခါးအရသာ မျှတစွာ ကောင်းမွန်ပါသည်။',
    description_en: 'Premium matcha edition of Kagerou, sandwiching rich Uji green tea cream between delicate wafers.',
    icon: '🍵',
    badge: '抹茶限定',
    allergens: ['小麦', '卵', '乳'],
    shelf_life_storage: '約40日 / 常温（冷やすと一層美味）',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '抹茶', hiragana: 'まっちゃ', myanmar: 'လက်ဖက်စိမ်းအမှုန့်', english: 'Matcha green tea' },
      { kanji: '贅沢', hiragana: 'ぜいたく', myanmar: 'အဆင့်မြင့် ဇိမ်ကျသော', english: 'Luxurious / Indulgent' }
    ],
    service_pitch: {
      ja: '宇治抹茶の香り豊かな大人の味わいでございます。冷やしても美味しく召し上がれます。',
      furigana: 'うじまっちゃのかおりゆたかなおとなのあじわいでございます。ひやしてもおいしくめしあがれます。',
      my: 'Uji လက်ဖက်စိမ်း ရနံ့သင်းပျံ့ပြီး လူကြီးကြိုက် အရသာဖြစ်ပါတယ်။ ရေခဲသေတ္တာထဲ အေးအောင်ထားစားလျှင်လည်း အထူးကောင်းမွန်ပါတယ်။',
      en: 'It offers a rich Uji matcha aroma with a refined adult taste. It is also delicious when chilled.'
    }
  },
  {
    id: 'hello_kitty_kagerou_kan',
    page: 20,
    name: 'ハローキティ コラボ缶 かげろう',
    furigana: 'ハローキティ コラボかん かげろう',
    ruby_name: 'ハローキティ コラボ<ruby>缶<rt>かん</rt></ruby> かげろう',
    name_my: 'Hello Kitty နှင့် ပူးပေါင်းထုတ်လုပ်မှု သံဘူး Kagero',
    name_en: 'Hello Kitty Limited Edition Kagerou Tin Box',
    category: '和菓子・スイーツ',
    price: 1350,
    description_ja: 'サンリオの大人気キャラクター「ハローキティ」と白浜銘菓「かげろう」の特別限定コラボ缶。食べ終わった後も記念缶として使えます。',
    description_my: 'Hello Kitty ဇာတ်ကောင်နှင့် ပူးပေါင်းထုတ်လုပ်ထားသော အထူးထုတ် သံဘူးဖြစ်ပြီး မုန့်စားပြီးပါကလည်း အမှတ်တရဘူးအဖြစ် သိမ်းဆည်းနိုင်ပါသည်။',
    description_en: 'Exclusive collaboration souvenir tin between Sanrio Hello Kitty and Shirahama Kagerou. The keepsake tin can be reused forever.',
    icon: '🎀',
    badge: '限定コラボ缶',
    allergens: ['小麦', '卵', '乳'],
    shelf_life_storage: '約40日 / 常温保存',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '限定', hiragana: 'げんてい', myanmar: 'အကန့်အသတ်ဖြင့်သာထုတ်သော', english: 'Limited edition' },
      { kanji: '記念缶', hiragana: 'きねんかん', myanmar: 'အမှတ်တရ သံဘူး', english: 'Souvenir tin' }
    ],
    service_pitch: {
      ja: '可愛いキティちゃんの限定缶で、お子様や女性のお客様に大人気でございます。',
      furigana: 'かわいいキティちゃんのげんていかんで、おこさまやじょせいのおきゃくさまにだいにんきでございます。',
      my: 'ချစ်စရာ Kitty သံဘူးလေးဖြစ်ပြီး ကလေးများနှင့် အမျိုးသမီးဧည့်သည်များ အထူးကြိုက်နှစ်သက်ကြပါတယ်။',
      en: 'Featuring a cute limited Hello Kitty tin, this is extremely popular with families and female guests.'
    }
  },
  {
    id: 'chef_kitani_curry',
    page: 20,
    name: 'シェフ木谷 カレー',
    furigana: 'シェフきたに カレー',
    ruby_name: 'シェフ<ruby>木谷<rt>きたに</rt></ruby> カレー',
    name_my: '白浜古賀の井リゾート＆スパ Chef Kitani ၏ လက်ရာ အသင့်စား ဂျပန် Kare ဘူး',
    name_en: 'Shirahama Coganoi Resort Chef Kitani Retort Curry',
    category: '調味料・特産品',
    price: 780,
    description_ja: '当ホテル「白浜古賀の井リゾート＆スパ」の総料理長・木谷シェフが監修した本格ホテル特製レトルトカレー。深いコクとスパイスの調和。',
    description_my: 'ကျွန်တော်တို့ ဟိုတယ်ကြီး၏ စားဖိုမှူးချုပ် Chef Kitani ကိုယ်တိုင် ကြီးကြပ်ချက်ပြုတ်ထားသော အသင့်စား ပရီမီယမ် ကာရီဟင်းထုပ် ဖြစ်ပါသည်။',
    description_en: 'Authentic hotel-grade gourmet curry supervised by Executive Chef Kitani of Shirahama Coganoi Resort & Spa.',
    icon: '🍛',
    badge: '当館シェフ特製',
    allergens: ['小麦', '乳', '牛肉', '豚肉', '大豆', 'りんご'],
    shelf_life_storage: '製造日より2年 / 常温保存',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '総料理長', hiragana: 'そうりょうりちょう', myanmar: 'စားဖိုမှူးချုပ်', english: 'Executive Chef' },
      { kanji: '監修', hiragana: 'かんしゅう', myanmar: 'ကြီးကြပ်လမ်းညွှန်မှု', english: 'Supervision' }
    ],
    service_pitch: {
      ja: '当館の料理長が手掛けた自慢のカレーで、ご自宅でもホテルの本格的な味をお楽しみいただけます。',
      furigana: 'とうかんのりょうりちょうがてがけたじまんのカレーで、ごじたくでもホテルのほんかくてきなあじをおたのしみいただけます。',
      my: 'ကျွန်တော်တို့ ဟိုတယ်စားဖိုမှူးချုပ်၏ ဂုဏ်ယူရသော လက်ရာဖြစ်ပြီး အိမ်မှာလည်း ဟိုတယ်အရသာအတိုင်း သုံးဆောင်နိုင်ပါတယ်။',
      en: 'Crafted with pride by our hotel executive chef, allowing you to enjoy authentic hotel flavor at home.'
    }
  },
  {
    id: 'gachapon_capsule_station',
    page: 20,
    name: 'カプセルステーション（ガチャガチャ）',
    furigana: 'カプセルステーション（ガチャガチャ）',
    ruby_name: 'カプセルステーション（ガチャガチャ）',
    name_my: 'ကပ်ပဆူးလ်စတေရှင် ဂါချာဂါချာ စက် (ပန်ဒါ၊ Hello Kitty၊ Kirby၊ ငါးမန်း၊ တု အရုပ်များ)',
    name_en: 'Gachapon Capsule Station (Panda, Sanrio, Kirby, Shark)',
    category: 'パンダ・玩具',
    price: 300,
    description_ja: '売店横に設置された人気カプセル自販機。白浜パンダ、サンリオ、星のカービィ、リアルルアー、海のなかまたち等。100円玉専用（レジで両替可能）。',
    description_my: 'အရောင်းဆိုင်ဘေးတွင် ထားရှိသော Capsule Station ဖြစ်ပါသည်။ ပန်ဒါရုပ်၊ Sanrio ဇာတ်ကောင်၊ ကာဘီ၊ ငါးမျှားငါးတု၊ ပင်လယ်သတ္တဝါများ ရရှိနိုင်ပါသည်။ ၁၀၀ ယန်း အကြွေစေ့လဲလိုပါက ကောင်တာတွင် ဆောင်ရွက်ပေးပါသည်။',
    description_en: 'Capsule toy station located next to the shop. Dispenses Shirahama pandas, Sanrio, Kirby, realistic lures, and sharks. 100-yen coin exchange at counter.',
    icon: '🎰',
    badge: '売店横ステーション',
    allergens: ['なし'],
    shelf_life_storage: '対象年齢6歳以上 / 小部品の誤飲注意',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '取出口', hiragana: 'とりだしぐち', myanmar: 'ပစ္စည်းထုတ်ယူသည့်ပေါက်', english: 'Dispenser chute / Exit' },
      { kanji: '両替', hiragana: 'りょうがえ', myanmar: 'ငွေအကြွေလဲလှယ်ခြင်း', english: 'Money exchange' }
    ],
    service_pitch: {
      ja: '100円玉の両替はレジにて承ります。ハンドルをカチッと回してお楽しみください。',
      furigana: 'ひゃくえんだまのりょうがえはレジにてうけたまわります。ハンドルをカチッとまわしておたのしみください。',
      my: '၁၀၀ ယန်း အကြွေစေ့လဲလှယ်ပေးခြင်းကို ငွေရှင်းကောင်တာတွင် ဆောင်ရွက်ပေးပါတယ်။ လက်ကိုင်ဘီးကို ညာဘက်လှည့်၍ ယူနိုင်ပါတယ်။',
      en: 'We gladly provide 100-yen coins at the cash register. Turn the handle firmly to enjoy your prize!'
    }
  }
];

// Provide helper reference for category metadata
window.BAITEN_CATEGORIES = [
  { id: 'all', name_ja: 'すべて', name_my: 'အားလုံး', name_en: 'All Items', icon: 'sparkles' },
  { id: '和菓子・スイーツ', name_ja: '和菓子・スイーツ', name_my: 'ရိုးရာမုန့်များ', name_en: 'Confectionery', icon: 'cookie' },
  { id: '麺類・ラーメン', name_ja: '麺類・ラーメン', name_my: 'ခေါက်ဆွဲနှင့် ရာမင်', name_en: 'Ramen & Noodles', icon: 'soup' },
  { id: '調味料・特産品', name_ja: '調味料・特産品', name_my: 'ဟင်းခတ် Miso ဆော့စ်', name_en: 'Local Seasonings', icon: 'flame' },
  { id: '紀州南高梅', name_ja: '紀州南高梅', name_my: 'နန်ခိုး ဆီးသီးချဉ်', name_en: 'Kishu Plums', icon: 'circle-dot' },
  { id: '有田みかん加工品', name_ja: '有田みかん加工品', name_my: 'အာရိဒ လိမ္မော်ထုတ်ကုန်', name_en: 'Arita Orange Goods', icon: 'sun' },
  { id: '地酒・梅酒・ビール', name_ja: '地酒・梅酒・ビール', name_my: 'ဆာကေး၊ ဘီယာ၊ ဆီးသီးဝိုင်', name_en: 'Sake & Beer', icon: 'wine' },
  { id: 'アイス・冷凍', name_ja: 'アイス・冷凍', name_my: 'ရေခဲမုန့်များ', name_en: 'Ice Cream & Frozen', icon: 'snowflake' },
  { id: 'スナック・おつまみ', name_ja: 'スナック・おつまみ', name_my: 'သရေစာနှင့် အမြည်း', name_en: 'Snacks & Bites', icon: 'popcorn' },
  { id: 'ドリンク・飲料', name_ja: 'ドリンク・お茶・牛乳', name_my: 'အအေး၊ လက်ဖက်ရည်၊ နွားနို့', name_en: 'Beverages & Milk', icon: 'coffee' },
  { id: 'パンダ・玩具', name_ja: 'パンダ・玩具', name_my: 'ပန်ဒါအရုပ်နှင့် ကစားစရာ', name_en: 'Panda Goods & Toys', icon: 'smile' },
  { id: '雑貨・アパレル', name_ja: '雑貨・アパレル', name_my: 'အဝတ်အထည်နှင့် ကမ်းခြေသုံး', name_en: 'Apparel & Sundries', icon: 'shirt' },
  { id: '日用品・たばこ', name_ja: '日用品・たばこ', name_my: 'နေ့စဉ်သုံးနှင့် ဆေးလိပ်', name_en: 'Daily Amenities', icon: 'package' },
  { id: '縁起物・ホテルサービス', name_ja: '縁起物・ホテルサービス', name_my: 'အဆောင်နှင့် ဝန်ဆောင်မှု', name_en: 'Services & Charms', icon: 'hotel' }
];
