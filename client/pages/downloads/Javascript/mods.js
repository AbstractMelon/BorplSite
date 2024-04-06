(async()=>{

    function addMod(name = "Mod not found.", author = "Mod author not found.", img = "https://http.cat/503", github = "./503.html", description = "Ham and cheese sandwhich 😋") {
      let modEl = document.createElement("div")
      modEl.innerHTML = `
      <img class="modImg" src="https://http.cat/503">
        <p class="modName">Mod not found.</p>
        <p class="modAuthor">Mod author not found.</p>
        <div class="buttonContainer">
          <button class="seeWiki">About</button><button class="seeGithub">Download</button>
        </div>
      `
      modEl.classList.add("mod")
    
      modEl.querySelector(".modName").textContent = name
      modEl.querySelector(".modImg").src = img
      modEl.querySelector(".modAuthor").textContent = author
      modEl.querySelector(".seeWiki").onclick = ()=>{
        showAbout(description,img,"Download",github)
      }
      modEl.querySelector(".seeGithub").onclick = ()=>{
        window.open(github)
      }
    
      document.querySelector(".gallery").appendChild(modEl)
    }
    // addMod("Ability Storm","@unluckycrafter", "./images/mods/AbilityStorm.png", "./503.html", "./503.html")
    
      function showAbout(text="Error 503: Text currently not available.",img="https://http.cat/503",button="503",link="./503.html"){
        document.querySelector("#aboutText").textContent = 
        document.querySelector("#aboutText").textContent = text
        document.querySelector("#aboutImg").src = img
        document.querySelector("#aboutButton").textContent = button
        document.querySelector("#aboutButton").onclick = ()=>{
          window.open(link)
        }
        document.querySelector("#aboutClose").onclick = ()=>{      
          document.querySelector(".about").style.transform = "translate(-200%, -200%)"
          document.querySelector("#stopInteraction").style.opacity = 0
          setTimeout(()=>{
            document.querySelector(".about").style.display = "none"
            document.querySelector("#stopInteraction").style.display = "none"
          },500)
        }
        
        document.querySelector(".about").style.display = "inline-block"
        document.querySelector("#stopInteraction").style.opacity = 0
        document.querySelector("#stopInteraction").style.display = "inline-block"
        setTimeout(()=>{
          document.querySelector(".about").style.transform = "translate(-50%, -50%)"
          document.querySelector("#stopInteraction").style.opacity = 0.5
        },100)
      }
      document.querySelector(".about").style.display = "none"
      document.querySelector(".about").style.transform = "translate(-200%, -200%)"
      
    
    let jsonData = await fetch("./mods.json", { cache: "no-store" })
      // console.log(jsonData)
    jsonData = await jsonData.json()
      console.log(jsonData)
      jsonData.mods.forEach((mod)=>{
        //mod scheme: {"name": "Ability Storm","author": "unluckycrafter","img":"AbilityStorm.png","wiki":"","github":""}
        addMod(mod.name, mod.author==""?"Mod author not found.":mod.author, "../../images/modicons/"+mod.img, mod.github==""?"./503.html":mod.github,mod.description==""?"Error 503: Text currently not available.":mod.description)
      })
})()