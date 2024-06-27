const bbdd = [
    {
        id: 0,
        nombre: "triage",
        titulo: "Triage is first aid for your inbox",
        descripcion: "Everything you loved about the original Triage is back - only better. Download Triage 2 on the App Store today",
        alt_imagen: "Iphone",
        imagen: "/assets/images/triage.png",
        icono: "/assets/images/icons/box.svg",
        svg_:"/assets/images/icons/app-store.svg",
        alt_svg:"icono svg"
        
    },
    {
        id: 1,
        nombre:"drag-left",
        titulo:"Drag left to archive",
        descripcion:"Unread messages appear in a stack of cards, like this.",
        alt_imagen:"Iphone2",
        imagen:"/assets/images/just-now.png",
        icono:"/assets/images/icons/arrow-left-circle.svg",
        alt_svg:"icono svg"

    },
    {
        id: 2,
        nombre:"drag-right",
        titulo:"Drag right to keep",
        descripcion: "Or create your own custom workflow.",
        alt_imagen:"Iphone3",
        imagen:"/assets/images/dropbox.png",
        icono:"/assets/images/icons/arrow-right-circle.svg",
        alt_svg:"icono svg"
    },
    {
        id: 3,
        nombre:"tap",
        titulo:"Tap to expand",
        descripcion:"Open the message to view the whole thread.",
        alt_imagen:"Iphone4",
        imagen:"/assets/images/done.png",
        icono:"/assets/images/icons/arrows-angle-expand.svg",
        alt_svg:"icono svg"
    },
    {
        id: 4,
        nombre:"reply",
        titulo:"Reply in context",
        descripcion:"Send a quick reply without leaving the app.",
        alt_imagen:"Iphone5",
        imagen:"/assets/images/reply.png",
        icono:"/assets/images/icons/reply.svg",
        alt_svg:"icono svg"
    },
    {
        id:11,
        caracteristicas : [
            {
                id:5,
                imagen_: "/assets/images/icons/envelope.svg",
                detalles: "Works with Gmail, iCloud & IMAP",
                alt_imagen_: "Imagen SVG",
                color : "azul"
            },
            {
                id:6,
                imagen_: "/assets/images/icons/cpu-fill.svg",
                detalles: "All processing happens on device",
                alt_imagen_: "Imagen SVG",
                color : "amarillo"

            },
            {
                id:7,
                imagen_: "/assets/images/icons/shield-shaded.svg",
                alt_imagen_: "Imagen SVG",
                detalles: "Your data is yours to stay",
                color : "rojo"
            },
            {
                id:8,
                imagen_: "/assets/images/icons/moon-stars.svg",
                alt_imagen_: "Imagen SVG",
                detalles: "Supports dark mode",
                color : "negro"
            },
            {
                id:9,
                imagen_: "/assets/images/icons/hand-thumbs-up.svg",
                alt_imagen_: "Imagen SVG",
                detalles: "Free to use. Or pay for more features.",
                color : "morado"
            },
            {
                id:10,
                imagen_: "/assets/images/icons/hammer.svg",
                alt_imagen_: "Imagen SVG",
                detalles: "Built & maintained by indie developers",
                color : "blanco"
            }
        ]
    },
    {
        id:12,
        praise: [
            {
                id:13,
                texto:"Since I’ve been using Triage, I’m more caught up on my email than I have been in years.",
                logo:"/assets/images/daring-fireball.png",
                alt_logo:"Daring Fireball"
            },
            {
                id:14,
                texto:"If you re constantly battling to keep your email account at inbox zero, Triage for iOS could be worth a look.",
                logo:"/assets/images/the-verge.svg",
                alt_logo:"The verge"
            },
            {
                id:15,
                texto:"Triage makes it feel seamless, and even fun, to achieve - if not Inbox Zero - at least Inbox Zen.",
                logo:"/assets/images/mac-world.svg",
                alt_logo:"Mac World"
            },
            {
                id:16,
                texto:"Triage provides the first aid necessary to get your inbox back in fighting shape.",
                logo:"/assets/images/mac-life.png",
                alt_logo:"Mac life"
            },
            {
                id:17,
                texto:"Triage is a boon to those who have struggled to keep their inboxes clean and organized.",
                logo:"/assets/images/clean-email.png",
                alt_logo:"Clean email"
            },
            {
                id:18,
                texto:"Triage is my new favorite email app for iPhone.",
                logo:"/assets/images/mac-stories.png",
                alt_logo:"Mac stories"
            },
        ]
    },
    {
        id:19,
        footer: [
            {
                id:20,
                titulo_:"FAQ",
            },
            {
                id:21,
                titulo_:"Privacy",
            },
            {
                id:22,
                titulo_:"Terms",
            },
            {
                id:23,
                titulo_:"Security",
            },
            
        ]
    },
    {
        id:24,
        footer_icono:[
            {
                id:25,
                svg:"/assets/images/icons/envelope.svg",
                alt_icono:"Carta"
            },
            {
                id:26,
                svg:"/assets/images/icons/twitter.svg",
                alt_icono:"Twitter"
            }
        ]
    }
]




module.exports = {
    bbdd
}