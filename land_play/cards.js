//Array of cards and its images. Alt value created to take Ace values (1 or 11) into count.

window.cards = [
    {
        name: "ac",
        value: 1,
        altValue: 10,
        imgUrl: "../card_img/ac.PNG"
    },
    {
        name: "2c",
        value: 2,
        altValue: 2,
        imgUrl: "../card_img/2c.PNG"
    },
    {
        name: "3c",
        value: 3,
        altValue: 3,
        imgUrl: "../card_img/3c.PNG"
    },
    {
        name: "4c",
        value: 4,
        altValue: 4,
        imgUrl: "../card_img/4c.PNG"
    },
    {
        name: "5c",
        value: 5,
        altValue: 5,
        imgUrl: "../card_img/5c.PNG"
    },
    {
        name: "6c",
        value: 6,
        altValue: 6,
        imgUrl: "../card_img/6c.PNG"
    },
    {
        name: "7c",
        value: 7,
        altValue: 7,
        imgUrl: "../card_img/7c.PNG"
    },
    {
        name: "8c",
        value: 8,
        altValue: 8,
        imgUrl: "../card_img/8c.PNG"
    },
    {
        name: "9c",
        value: 9,
        altValue: 9,
        imgUrl: "../card_img/9c.PNG"
    },
    {
        name: "10c",
        value: 10,
        altValue: 10,
        imgUrl: "../card_img/10c.PNG"
    },
    {
        name: "jc",
        value: 10,
        altValue: 10,
        imgUrl: "../card_img/jc.PNG"
    },
    {
        name: "qc",
        value: 10,
        altValue: 10,
        imgUrl: "../card_img/qc.PNG"
    },
    {
        name: "kc",
        value: 10,
        altValue: 10,
        imgUrl: "../card_img/kc.PNG"
    },
    {
        name: "ah",
        value: 1,
        altValue: 10,
        imgUrl: "../card_img/ah.PNG"
    },
    {
        name: "2h",
        value: 2,
        altValue: 2,
        imgUrl: "../card_img/2h.PNG"
    },
    {
        name: "3h",
        value: 3,
        altValue: 3,
        imgUrl: "../card_img/3h.PNG"
    },
    {
        name: "4h",
        value: 4,
        altValue: 4,
        imgUrl: "../card_img/4h.PNG"
    },
    {
        name: "5h",
        value: 5,
        altValue: 5,
        imgUrl: "../card_img/5h.PNG"
    },
    {
        name: "6h",
        value: 6,
        altValue: 6,
        imgUrl: "../card_img/6h.PNG"
    },
    {
        name: "7h",
        value: 7,
        altValue: 7,
        imgUrl: "../card_img/7h.PNG"
    },
    {
        name: "8h",
        value: 8,
        altValue: 8,
        imgUrl: "../card_img/8h.PNG"
    },
    {
        name: "9h",
        value: 9,
        altValue: 9,
        imgUrl: "../card_img/9h.PNG"
    },
    {
        name: "10h",
        value: 10,
        altValue: 10,
        imgUrl: "../card_img/10h.PNG"
    },
    {
        name: "jh",
        value: 10,
        altValue: 10,
        imgUrl: "../card_img/jh.PNG"
    },
    {
        name: "qh",
        value: 10,
        altValue: 10,
        imgUrl: "../card_img/qh.PNG"
    },
    {
        name: "kh",
        value: 10,
        altValue: 10,
        imgUrl: "../card_img/kh.PNG"
    },
    {
        name: "acl",
        value: 1,
        altValue: 10,
        imgUrl: "../card_img/acl.PNG"
    },
    {
        name: "2cl",
        value: 2,
        altValue: 2,
        imgUrl: "../card_img/2cl.PNG"
    },
    {
        name: "3cl",
        value: 3,
        altValue: 3,
        imgUrl: "../card_img/3cl.PNG"
    },
    {
        name: "4cl",
        value: 4,
        altValue: 4,
        imgUrl: "../card_img/4cl.PNG"
    },
    {
        name: "5cl",
        value: 5,
        altValue: 5,
        imgUrl: "../card_img/5cl.PNG"
    },
    {
        name: "6cl",
        value: 6,
        altValue: 6,
        imgUrl: "../card_img/6cl.PNG"
    },
    {
        name: "7cl",
        value: 7,
        altValue: 7,
        imgUrl: "../card_img/7cl.PNG"
    },
    {
        name: "8cl",
        value: 8,
        altValue: 8,
        imgUrl: "../card_img/8cl.PNG"
    },
    {
        name: "9cl",
        value: 9,
        altValue: 9,
        imgUrl: "../card_img/9cl.PNG"
    },
    {
        name: "10cl",
        value: 10,
        altValue: 10,
        imgUrl: "../card_img/10cl.PNG"
    },
    {
        name: "jcl",
        value: 10,
        altValue: 10,
        imgUrl: "../card_img/jcl.PNG"
    },
    {
        name: "qcl",
        value: 10,
        altValue: 10,
        imgUrl: "../card_img/qcl.PNG"
    },
    {
        name: "kcl",
        value: 10,
        altValue: 10,
        imgUrl: "../card_img/kcl.PNG"
    },
    {
        name: "ad",
        value: 1,
        altValue: 10,
        imgUrl: "../card_img/ad.PNG"
    },
    {
        name: "2d",
        value: 2,
        altValue: 2,
        imgUrl: "../card_img/2d.PNG"
    },
    {
        name: "3d",
        value: 3,
        altValue: 3,
        imgUrl: "../card_img/3d.PNG"
    },
    {
        name: "4d",
        value: 4,
        altValue: 4,
        imgUrl: "../card_img/4d.PNG"
    },
    {
        name: "5d",
        value: 5,
        altValue: 5,
        imgUrl: "../card_img/5d.PNG"
    },
    {
        name: "6d",
        value: 6,
        altValue: 6,
        imgUrl: "../card_img/6d.PNG"
    },
    {
        name: "7d",
        value: 7,
        altValue: 7,
        imgUrl: "../card_img/7d.PNG"
    },
    {
        name: "8d",
        value: 8,
        altValue: 8,
        imgUrl: "../card_img/8d.PNG"
    },
    {
        name: "9d",
        value: 9,
        altValue: 9,
        imgUrl: "../card_img/9d.PNG"
    },
    {
        name: "10d",
        value: 10,
        altValue: 10,
        imgUrl: "../card_img/10d.PNG"
    },
    {
        name: "jd",
        value: 10,
        altValue: 10,
        imgUrl: "../card_img/jd.PNG"
    },
    {
        name: "qd",
        value: 10,
        altValue: 10,
        imgUrl: "../card_img/qd.PNG"
    },
    {
        name: "kd",
        value: 10,
        altValue: 10,
        imgUrl: "../card_img/kd.PNG"
    }
    
];