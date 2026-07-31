let form = document.querySelector("form");
let username = document.querySelector("#name");
let photo=document.querySelector("#photo");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
const userManager = {
   //usami property hai users
    users : [],

    initial: function(){
     form.addEventListener("submit",this.submitform.bind(this));
    },
    submitform: function(e){
    e.preventDefault();
    this.addUsers();
    

    },


    addUsers:function(){
        this.users.push({
        name: username.value,
        photo: photo.value,
        role: role.value,
        bio: bio.value,

    });
        console.log(this.users);
    form.reset();
    this.showUser();

    },

    showUser: function(){

        document.querySelector(".users").innerHTML="" ;
    
        this.users.forEach(function(user){
            
            // <div class="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
let card = document.createElement("div");
card.className = "bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center text-center";

// <img class="w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200 shadow"
//      src="https://randomuser.me/api/portraits/men/32.jpg" alt="User Photo">
let img = document.createElement("img");
img.className = "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200 shadow";
img.src =user.photo;
img.alt = "User Photo";
card.appendChild(img);

// <h2 class="text-2xl font-bold mb-1 text-blue-700">John Doe</h2>
let name = document.createElement("h2");
name.className = "text-2xl font-bold mb-1 text-blue-700";
name.textContent = user.name;
card.appendChild(name);

// <p class="text-purple-500 mb-2 font-medium">Frontend Developer</p>
let role = document.createElement("p");
role.className = "text-purple-500 mb-2 font-medium";
role.textContent = user.role;
card.appendChild(role);

// <p class="text-gray-700 text-center">Loves building beautiful UIs and learning new technologies.</p>
let bio = document.createElement("p");
bio.className = "text-gray-700 text-center";
bio.textContent = user.bio;
card.appendChild(bio);

// </div>  -- sab kuch card ke andar daalo





// card ko page pe dikhane ke liye kisi container mein daalo
document.querySelector(".users").appendChild(card);
        })

    

    },


    removeUser: function(){},

}
    userManager.initial();
