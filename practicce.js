// ============================================
// FORM aur INPUT elements ko select kar liya
// ye sab GLOBAL scope mein hain - poore code mein kahin bhi accessible
// ============================================
let form = document.querySelector("form");
let username = document.querySelector("#name");
let photo = document.querySelector("#photo");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");


// ============================================
// userManager - poora logic isi object ke andar hai
// (encapsulation - users array aur saare functions ek jagah bundled hain)
// ============================================
const userManager = {

    // users array - saare add kiye gaye users yahan store honge
    users: [],

    // ============================================
    // initial() - app shuru hote hi ye call hota hai
    // sirf ek kaam karta hai: form pe submit listener lagana
    // ============================================
    initial: function () {
        // bind(this) zaroori hai - warna submitform ke andar
        // "this" = form (element) ban jata, userManager nahi
        form.addEventListener("submit", this.submitform.bind(this));
    },

    // ============================================
    // submitform() - jab form submit ho, ye chalta hai
    // ============================================
    submitform: function (e) {
        e.preventDefault(); // page reload hone se roka (default form behavior)
        this.addUsers();     // naya user array mein add karo
    },

    // ============================================
    // addUsers() - form ki values leke users array mein daalta hai
    // ============================================
    addUsers: function () {
        // naya user object banaya aur users array mein push kiya
        this.users.push({
            name: username.value,
            photo: photo.value,
            role: role.value,
            bio: bio.value,
        });

        console.log(this.users); // debug ke liye - poora array console mein dekh sakte ho

        form.reset();     // form ke saare inputs khaali kar do agla entry ke liye
        this.showUser();  // UI ko turant refresh karo - naya card dikhane ke liye
    },

    // ============================================
    // showUser() - users array ke hisaab se saare cards banata hai
    // (ye function har baar POORI list se dobara render karta hai)
    // ============================================
    showUser: function () {

        // sabse pehle purana content HATAO
        // (agar ye na karein to har render pe purane + naye dono cards jama hote jaate)
        document.querySelector(".users").innerHTML = "";

        // arrow function use kiya hai - isliye "this" andar bhi userManager hi rahega
        // (agar normal function likhte, to "this" window ban jaata - error aata)
        this.users.forEach((user, index) => {

            // ===== card ka bahar wala div =====
            let card = document.createElement("div");
            card.className = "bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center text-center";

            // ===== user ki photo (img tag) =====
            let img = document.createElement("img");
            img.className = "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200 shadow";
            img.src = user.photo;
            img.alt = "User Photo";
            card.appendChild(img); // photo ko card ke andar daala

            // ===== user ka naam (h2 tag) =====
            let name = document.createElement("h2");
            name.className = "text-2xl font-bold mb-1 text-blue-700";
            name.textContent = user.name;
            card.appendChild(name); // naam ko card ke andar daala

            // ===== user ka role (p tag) =====
            let roleText = document.createElement("p"); // "role" naam clash se bachne ke liye alag naam diya
            roleText.className = "text-purple-500 mb-2 font-medium";
            roleText.textContent = user.role;
            card.appendChild(roleText); // role ko card ke andar daala

            // ===== user ki bio (p tag) =====
            let bioText = document.createElement("p"); // "bio" naam clash se bachne ke liye alag naam diya
            bioText.className = "text-gray-700 text-center";
            bioText.textContent = user.bio;
            card.appendChild(bioText); // bio ko card ke andar daala

            // ===== Remove button banaya =====
            let removeBtn = document.createElement("button");
            removeBtn.type = "button"; // zaroori hai - warna form ke andar hone se ye "submit" ki tarah behave karega
            removeBtn.textContent = "Remove";
            removeBtn.className = "mt-4 text-red-500 hover:text-red-700 text-sm font-medium";

            // Remove button pe click event laga diya
            // arrow function use kiya - taake "this" yahan bhi userManager hi rahe
            removeBtn.addEventListener("click", () => {
                // "index" closure ke through yaad reh gaya - yehi is card ka apna, sahi index hai
                this.removeUser(index);
            });

            card.appendChild(removeBtn); // button ko card ke andar daala

            // poore bane hue card ko page ke ".users" container mein daal diya
            document.querySelector(".users").appendChild(card);
        });
    },

    // ============================================
    // removeUser() - specific user ko array se hataata hai
    // ============================================
    removeUser: function (index) {
        // splice(index, 1) -> is exact index se sirf EK item hataya
        // (pop() use nahi kiya, kyunki wo hamesha AAKHRI item hataata - galat user delete ho sakta tha)
        this.users.splice(index, 1);

        // list hatne ke turant baad UI ko dobara render karo
        // (updated users array ke saath, taake screen turant sync ho jaaye)
        this.showUser();
    },

};

// app ko shuru kiya - ye pehli cheez hai jo chalti hai
userManager.initial();