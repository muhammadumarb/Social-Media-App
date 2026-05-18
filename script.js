// side bar

const menuItems = document.querySelectorAll(".menu-item");
const messagesNotification = document.querySelector("#messages-notification")
const messages = document.querySelector(".messages")
const message = messages.querySelectorAll(".message")
const messageSearch = document.querySelector("#message-search")

// =theme
const theme = document.querySelector("#theme")
const themeModal = document.querySelector(".customize-theme")
const fontSizes = document.querySelectorAll(".choose-size span")
var root = document.querySelector(" :root")
const colorPalette = document.querySelectorAll(".choose-color span")
const bg1 = document.querySelector(".bg-1")
const bg2 = document.querySelector(".bg-2")
const bg3 = document.querySelector(".bg-3")



// ====================SIDE BAR-----------------------

// remove active class from all menu items

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove("active")
    })
}

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        changeActiveItem();
        item.classList.add("active");
        if (item.id != "notifications") {
            document.querySelector(".notifications-popup").
                style.display = "none"

        } else {
            document.querySelector(".notifications-popup").
                style.display = "block"
            document.querySelector("#notifications .notification-count").
                style.display = "none"
        }
    })
})



// ====================MESSAGES==========================
// search chat 

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.innerText.toLowerCase();
        if (name.includes(val)) {
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    })
}









messageSearch.addEventListener("keyup", searchMessage)





messagesNotification.addEventListener("click", () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector(".notification-count").style.display = "none"
    setTimeout(() => {
        messages.style.boxShadow = "none"
    }, 2000)

})



// =================THEME/DISPLAY CUSTOMIZATION


// open modal
const openThemeModal = () => {
    themeModal.style.display = "grid"
}

// close modal
const closeThemeMOdal = (e) => {
    if (e.target.classList.contains("customize-theme")) {
        themeModal.style.display = "none"
    }
}
themeModal.addEventListener("click", closeThemeMOdal)


theme.addEventListener("click", openThemeModal)


// =======================font =====================
// remove active class from spans or font sizes
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove("actve")
    })
}



fontSizes.forEach(size => {
    removeSizeSelector()
    let fontSize;
    size.classList.toggle("active")

    size.addEventListener("click", () => {
        if (size.classList.contains("font-size-1")) {
            fontSize = "10px";
            root.style.setProperty("--sticky-top-left", '5.4rem')
            root.style.setProperty("--sticky-top-right", '5.4rem')
        } else if (size.classList.contains("font-size-2")) {
            fontSize = "13px"
            root.style.setProperty("--sticky-top-left", '5.4rem')
            root.style.setProperty("--sticky-top-right", '-7rem')
        }
        else if (size.classList.contains("font-size-3")) {
            fontSize = "16px"
            root.style.setProperty("--sticky-top-left", '-2rem')
            root.style.setProperty("--sticky-top-right", '-17rem')
        }
        else if (size.classList.contains("font-size-4")) {
            fontSize = "19px"
            root.style.setProperty("--sticky-top-left", '-5rem')
            root.style.setProperty("--sticky-top-right", '-25rem')
        }
        else if (size.classList.contains("font-size-5")) {
            fontSize = "22px"
            root.style.setProperty("--sticky-top-left", '-12rem')
            root.style.setProperty("--sticky-top-right", '-35rem')
        }
        // change font size of the root html
        document.querySelector("html").style.fontSize = fontSize
    })

})




// remove active class from colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove("active")
    }
    )
}
// =====PRIMARY COLORS =============

colorPalette.forEach(color => {
    color.addEventListener("click", () => {
        let primaryHue
        changeActiveColorClass()
        if (color.classList.contains("color-1")) {
            primaryHue = 252
        } else if (color.classList.contains("color-2")) {
            primaryHue = 52
        }
        else if (color.classList.contains("color-3")) {
            primaryHue = 352
        }
        else if (color.classList.contains("color-4")) {
            primaryHue = 152
        }
        else if (color.classList.contains("color-5")) {
            primaryHue = 202
        }
        color.classList.add("active")

        root.style.setProperty("--primary-color-hue", primaryHue)
    })
})

// theme background values 
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;


// change background color

const changeBG = () => {
    root.style.setProperty("--light-color-lightness", lightColorLightness)
    root.style.setProperty("--white-color-lightness", whiteColorLightness)
    root.style.setProperty("--dark-color-lightness", darkColorLightness)
}
bg1.addEventListener("click", () => {
    //  add active class
    bg1.classList.add("active")
    // remove active class 
    bg2.classList.remove("active")
    bg3.classList.remove("active")
    //   remove customize changes from local storage
    window.location.reload()
})

bg2.addEventListener("click", () => {
    lightColorLightness = "15%"
    whiteColorLightness = "20%%"
    darkColorLightness = "95%"

    //  add active class
    bg2.classList.add("active")
    // remove active class 
    bg1.classList.remove("active")
    bg3.classList.remove("active")
    changeBG()
})
bg3.addEventListener("click", () => {
    lightColorLightness = "0%"
    whiteColorLightness = "10%%"
    darkColorLightness = "95%"

    //  add active class
    bg3.classList.add("active")
    // remove active class 
    bg1.classList.remove("active")
    bg2.classList.remove("active")
    changeBG()
})