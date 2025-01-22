// اضافة العناوين والفوتر
let gamename = "Guess word"
document.title = gamename
document.querySelector('h1').innerHTML = gamename 
document.querySelector('footer').innerHTML = `${gamename} game has been created by Abdoulah` 

// ###########
// عمل متغير لطول المحاولات
let traying = 5
let word_length = 4
let traying_count = 1
let guesed_word = ""
// عمل قوائم الكلمات
let note = document.querySelector(".game .note")

let  e_4 = [
    "cake", "tree", "game", "fish", "bird", "book", "line", "ball", "desk", "head",
    "star", "light", "time", "back", "hair", "hand", "love", "song", "word", "play",
    "milk", "home", "work", "wind", "food", "rain", "sand", "door", "blue", "green",
    "pink", "desk", "soft", "rock", "jump", "flag", "fire", "chat", "blue", "hurt",
    "easy", "fast", "cool", "slow", "lazy", "dark", "show", "good", "deep", "life",
    "life", "moon", "ship", "clay", "bell", "roll", "map", "bake", "dove", "pool",
    "pain", "fast", "trap", "ship", "frog", "grow", "tree", "neat", "love", "seek",
    "warm", "cool", "bird", "gold", "seal", "card", "mask", "ball", "fire", "note",
    "neck", "word", "note", "head", "bell", "gift", "king", "mask", "hand", "rain",
    "leaf", "soap", "bite", "wait", "fire", "gold", "kick", "wind", "rope", "lake",
    "walk", "pass", "hit", "bend", "show", "play", "hold", "push", "stop", "hint",
    "mark", "road", "moon", "ship", "idea", "fair", "safe", "tool", "date", "game",
    "love", "ship", "hurt", "rise", "grow", "word", "high", "rope", "jump", "hope",
    "work", "mark", "star", "slow", "sand", "play", "time", "part", "sand", "fly",
    "wish", "hurt", "door", "case", "turn", "hard", "exit", "leaf", "fast", "key"
]
let  a_4 = [
    "كتاب", "شمس", "قمر", "أمل", "أب", "ماء", "أرض", "شباك", "غيم", "بحر",
    "سيف", "شجرة", "طائر", "سماء", "قلب", "لعب", "نور", "بيت", "علم", "سقف",
    "فرح", "هدوء", "حلم", "طعام", "ركض", "ورد", "خوف", "شرف", "حب", "درب",
    "عمل", "نجم", "خوف", "نجاح", "يد", "قلم", "مفتاح", "شباك", "حرب", "ضيف",
    "قهوة", "نوم", "راحة", "ماء", "جمل", "عين", "مفتاح", "دخان", "وقت", "غسل",
    "تعب", "هدية", "قمر", "رمل", "جمل", "صوت", "دورة", "نظيف", "كتاب", "أب",
    "دورة", "صديق", "طفل", "شجرة", "نخلة", "سكين", "ركض", "قفز", "عين", "حقل",
    "عقل", "أرض", "شوك", "شريك", "وجع", "صبر", "سقف", "نار", "مستقبل", "رغيف"
]    
let  e_5 = [
    "apple", "table", "grass", "water", "stone", "house", "clock", "white", "black", "beach",
    "clear", "dream", "stone", "watch", "juice", "peace", "chess", "sword", "peace", "firey",
    "shape", "glove", "dance", "sleep", "brush", "world", "cloud", "flame", "touch", "heart",
    "heart", "sweep", "plane", "glove", "pearl", "ocean", "bloom", "bake", "shine", "paint",
    "alive", "music", "truth", "swim", "alive", "dusty", "clean", "stone", "stone", "smile",
    "piano", "sail", "cloud", "break", "drain", "horn", "ghost", "block", "brave", "shift",
    "crash", "round", "alive", "gold", "stone", "spike", "plane", "train", "ocean", "play",
    "speed", "night", "care", "power", "wrong", "frame", "mango", "door", "drive", "spend",
    "rocky", "pearl", "flush", "bake", "think", "space", "jewel", "grape", "green", "brick",
    "clear", "grape", "smile", "swing", "lunar", "cross", "golf", "waste", "skirt", "block",
    "torch", "plank", "smoke", "glove", "stone", "spike", "smoke", "fight", "sheer", "fancy",
    "soul", "dawn", "pause", "shine", "quilt", "start", "plane", "green", "clear", "help",
    "block", "focus", "golf", "skirt", "morse", "lemon", "plane", "fire", "trust", "hefty",
    "gloom", "touch", "drink", "horse", "torch", "shift", "soul", "plank", "flush", "piano"
]
let  a_5 = [
    "مدينة", "شخص", "ملعب", "جبل", "شمس", "ماء", "قلب", "مفتاح", "أمل", "غيم",
    "قهوة", "هدية", "عقل", "شرف", "حب", "نجم", "صحف", "رحمة", "خوف", "مستقبل",
    "فجر", "تاريخ", "جمل", "حياة", "صباح", "سرير", "غروب", "شجرة", "حبر", "خاتم",
    "دورة", "قلم", "دخان", "نوم", "قمر", "رغم", "درب", "سقف", "دودة", "أدب",
    "أرض", "مخيم", "سوق", "بنك", "عمل", "دعم", "محل", "غسيل", "بئر", "جمل",
    "بطاقة", "مطر", "كرة", "خريطة", "الليل", "عائلة", "رجل", "طعام", "إحساس", "قبعة",
    "كتب", "سكين", "حب", "صديق", "ورقة", "جميع", "زهر", "شخص", "حصة", "إنسان",
    "دائرة", "غذاء", "شباك", "شراكة", "مغارة", "غابة", "عيد", "موعد", "فرح", "سلام",
    "سطور", "دمعة", "سطر", "حوار", "روح", "توفيق", "خاتم", "مطر", "هدوء", "سلام"
] 
// عمل دالة البدء
function startGame(wor_len=4 ,lungche="e") {
    console.clear()
    traying_count = 1
    let word_length = wor_len
    let words = []
    //  لخفاء زر البدء
    document.querySelector(".start").style.display = "none"
    document.querySelector(".gameplay-par").classList.remove("hide")
    document.querySelector("footer").classList.remove("colwi")
    note.innerHTML = ""

    if(word_length === 4){
        if(lungche === "e"){
            words = e_4
        }else{
            words = a_4
        }
    }else{
        if(lungche === "e"){
            words = e_5
        }else{
            words = a_5
        }
    }
    // تخمين الكمه والتاكد من عدد الاحرف
    function guess_word(words){
        let guesed_word = words[Math.floor(Math.random() * words.length)]
        if (guesed_word.length !== 4) {
            console.log(guesed_word)
            console.log(guesed_word.length)
            return guess_word(words)
        }
        return guesed_word
    }
    guesed_word = guess_word(words)
    // التاكد من ان اماكن الادخال فارغة
    let lupls = document.querySelectorAll(".lupl")
    lupls.forEach(lupl => {
        let cracters = lupl.querySelectorAll(".cracter-input")
        cracters.forEach(cracter => {cracter.value = ""
        cracter.classList = []
        cracter.classList.add("cracter-input", "disabled")
        cracter.setAttribute("disabled", true)
    })
    })
    removeDisabled()
    console.log("step 1 done")
}


// عمل دالة الانتهاء
function end_game() {

    document.querySelector(".start").style.display = "flex"
    // منع التحكم في زر التحقق
    document.querySelector(".check").disabled = true
    document.querySelector(".gameplay-par").classList.add("hide")
    document.querySelector("footer").classList.add("colwi")
}


// انشاء اماكن الادخال
function create_input_field() {
    const gameplay = document.querySelector(".gameplay")
    for (let i = 0; i < traying; i++) {
        const element = i;
        let lupl = document.createElement('div')
        gameplay.appendChild(lupl)
        lupl.classList.add("lupl")
        lupl.id = `lup${i+1}`
        let lupl_name = document.createElement('h3')
        lupl.appendChild(lupl_name)
        lupl_name.classList.add("lupl_name")
        lupl_name.appendChild(document.createTextNode(`try ${i+1}`))
        for (let z = 0; z < word_length; z++) {
            const element = z;
            let cracter_input = document.createElement("input")
            cracter_input.type = "text"
            lupl.appendChild(cracter_input)
            cracter_input.setAttribute("disabled", true)
            cracter_input.setAttribute("placeholder", "_")
            cracter_input.setAttribute("oninput", "switchToNextInput(this , 4)")
            cracter_input.setAttribute("maxlength", "1")
            cracter_input.classList.add("cracter-input")
            cracter_input.id = `input${z+1}lup${i+1}`
        }
    }
    document.querySelector(".check").disabled = true

}

//  اعدادات التنقل بين الازرار
function switchToNextInput(current , len_of_wor){
    if (current.value.length === 1){
        let nextid =  current.id
        let current_number = nextid[5]
        if(current_number < len_of_wor){
            nextid = `input${+current_number + 1}lup${current.id[9]}`
        }
        document.getElementById(nextid).focus()
    }
}
function keybordswitches() {
    document.querySelectorAll(".cracter-input").forEach(cracter => {
        cracter.addEventListener("keydown", (event) => {
            let cerint_index = Number(event.target.id[5]) 
            let cerint_lup = Number(event.target.id[9]) 

            if (event.key === "ArrowRight"){
                if (cerint_index !== word_length) document.querySelector(`#input${cerint_index+1}lup${cerint_lup}`).focus()
            }
            if (event.key === "ArrowLeft"){
                if (cerint_index !== 1) document.querySelector(`#input${cerint_index-1}lup${cerint_lup}`).focus()
            }
            if (event.key === "Enter") {
                if (document.querySelector(`.check`).disabled ) {
                    document.querySelector(`.start`).click()
                }else[
                    document.querySelector(`.check`).click()
                ]
            }
            if (event.key === "Backspace"){
                if (event.target.value.length === 0 && cerint_index !== 1){
                    let new_elm = document.querySelector(`#input${cerint_index - 1}lup${cerint_lup}`)
                    new_elm.focus()
                    new_elm.value = ""
                } 
            }
        }
    )
    })
}


    
// الجيم لوجيك
document.querySelector(".check").addEventListener("click", () => {
    let gamestat = true
    let invalid_input = false
    // التاكد من ان المدخلات حروف
    let nawinputys = document.querySelectorAll(`#lup${traying_count} .cracter-input`)
    nawinputys.forEach((cracter, index) => {
        console.log(`valus ${cracter.value}`)
        if (/^[a-zA-Z\u0621-\u064A\u0660-\u0669]$/.test(cracter.value)){
            if (guesed_word.includes(cracter.value)){
                if (cracter.value === guesed_word[index]){
                    cracter.classList.add("cl1" , "cracter-input-done")
                }else{
                    cracter.classList.add("cl2", "cracter-input-done")
                    gamestat = false
                }
            }else{
                cracter.classList.add("cl3","cracter-input-done")
                gamestat = false
            }
        }else{
            invalid_input = true
        }
        })
        if (invalid_input){
            note.innerHTML = "يجب عليك ادخال 4 احرف فقط"
            gamestat = false
            nawinputys.forEach(cracter => cracter.value = "")
            removeDisabled()
        }else{
            if (gamestat){
                note.innerHTML = `لقد ربحت استطعت حلها من ${traying_count} محاوله`
                console.log(traying_count)
                console.log("tnfyyz   1")
                return end_game()
            }else{
                console.log(guesed_word.split(""))
                console.log("tnfyyz   2")
                if (traying_count === traying) {
                    note.innerHTML = `لقد انتهيت من الجيم ولم يتم العثور على الكلمة الصحيحة`
                    return end_game()
                }else{
                    traying_count += 1
                    console.log(traying_count)
                    removeDisabled()
                }
        }  
    }
})



// فتح مكان الادخال للمحاولة الحالية
function removeDisabled() { 
    var nawinputys = document.querySelectorAll(`#lup${traying_count} .cracter-input`)
    nawinputys.forEach(cracter => {
        cracter.classList = []
        cracter.classList.add("cracter-input")
        cracter.removeAttribute("disabled")
    })
    console.log(traying_count)

    document.querySelector(`#lup${traying_count}`).classList.add("opas1")
    document.querySelector(`#input${1}lup${traying_count}`).focus()
    console.log("focus")
    document.querySelector(".check").disabled = false
}


document.querySelector(".more").addEventListener("click", () => {

    if (document.querySelector(".more").innerHTML === "less"){
        document.querySelector(".more").innerHTML = "more"
        document.querySelector(".game").classList.remove("up-move")
        document.querySelector(".morediv").classList.remove("up-move-more")

    }else{
        document.querySelector(".more").innerHTML = "less"    
        document.querySelector(".game").classList.add("up-move")
        document.querySelector(".morediv").classList.add("up-move-more")
    }
})


window.addEventListener("load", function() {
    console.log("loaded")
    create_input_field()
    keybordswitches()
})

