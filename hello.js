var mini=document.querySelector("#minicircle");



var crsrb = document.querySelector("#cursorblur")
var crsr = document.querySelector("#cursor")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    crsrb.style.left = dets.x - 50+ "px"
    crsrb.style.top = dets.y - 50 + "px"
})
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 1.3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";


    });
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #fff";
        crsr.style.backgroundColor = "rgb(255, 217, 0)";

    });


});
var cardall = document.querySelectorAll(".card");
cardall.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 1.3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";


    });
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #fff";
        crsr.style.backgroundColor = "rgb(255, 217, 0)";

    });


});
var swipall = document.querySelectorAll("#sw");
swipall.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.display = "none";
        crsrb.style.display = "none";




    });
    elem.addEventListener("mouseleave", function () {
        crsr.style.display = "block";
        crsrb.style.display = "block";

    });


});





// gsap.registerPlugin(ScrollTrigger);
gsap.to("#nav", {
    backgroundColor: "rgba(0, 0, 0, 0.98)",
    height: "70px",
    boxShadow: "-3px 10px 5px rgba(0, 0, 0, 0.884)",
    duration: 0.5,
    delay: 1,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
        //  markers:true,
    }
})


gsap.to("#main", {
    backgroundColor: "#000",


    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -20%",
        end: "top -20%",
        scrub: 2


    }


})
gsap.from("#bg", {
    x: -30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.4,

    scrollTrigger: {
        trigger: "#aboutus",
        scroller: "body",
        start: "top 60%",
        end: "top 58%",
        // markers:true,
        scrub: 3,
    }
})
gsap.from("#about h3, #about p", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.4,

    scrollTrigger: {
        trigger: "#aboutus",
        scroller: "body",
        start: "top 60%",
        end: "top 58%",
        // markers:true,
        scrub: 3,
    }
})
gsap.from("#bgc", {
    x: 30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.4,

    scrollTrigger: {
        trigger: "#aboutus",
        scroller: "body",
        start: "top 60%",
        end: "top 58%",
        // markers:true,
        scrub: 3,
    }
})
gsap.from(".card,#bgi", {
    y: 80,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".card",
        scroll: "body",
        start: "top 60%",
        end: "top 58%",
        scrub: 2,
    }


})
gsap.from("#gradintContainer h2", {
    scale: 1.3,
    duration: 0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: "#gradintContainer",
        scroll: "body",
        start: "top 60%",
        end: "top 58%",
        scrub: 2,
    }


})
gsap.from("#gi", {
    x: -30,
    duration: 0.5,
    // opacity:0,
    scrollTrigger: {
        trigger: "#gradintContainer",
        scroll: "body",
        start: "top 60%",
        end: "top 58%",
        // markers:true,
        scrub: 2,
    }


})
gsap.from("#gb", {
    x: 30,
    duration: 0.5,
    // opacity:0,
    scrollTrigger: {
        trigger: "#gradintContainer",
        scroll: "body",
        start: "top 60%",
        end: "top 58%",
        //  markers:true,
        scrub: 2,
    }


})


gsap.from("#nrotate", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#nrotate",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 2,
        // markers:true,


    }
})
gsap.from("#myvideo", {
    y: 80,
    opacity: 0,
    duration: 0.5,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#sw",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 2,
        // markers:true,


    }
})
gsap.from(".swiper,#sw-img", {
//    filter:"blur(2px)",
    opacity: 0,
    duration: 0.5,
   
    scrollTrigger: {
        trigger: "#sw",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 2,
        // markers:true,


    }
})

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

gsap.from("#h2-co", {
    scale: 0.9,
    scrollTrigger: {
        trigger: "#nrotate",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 2,
        //    markers:true,


    }
})
gsap.from("#rotate", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#nrotate",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 2,
        //    markers:true,


    }
})
gsap.from("#logo-revel h1", {
    y: 100,
    opacity:0,
    duration: 0.1,
    
    scrollTrigger: {
        trigger: "#logo-revel ",
        scroller: "body",
        start: "top 35%",
        end: "top 45%",
        scrub: 2,
        // markers:true,


    }
})
gsap.from("#logov1", {
    x:-50,
   
    opacity:0,
   
    scrollTrigger: {
        trigger: "#logo-revel ",
        scroller: "body",
        start: "top 35%",
        end: "top 45%",
        scrub: 2,
        // markers:true,


    }
})
gsap.from("#logov2", {
    y:50,
   
    opacity:0,
   
    scrollTrigger: {
        trigger: "#logo-revel ",
        scroller: "body",
        start: "top 35%",
        end: "top 45%",
        scrub: 2,
        // markers:true,


    }
})
gsap.from("#logov3", {
    x:50,
   
    opacity:0,
   
    scrollTrigger: {
        trigger: "#logo-revel ",
        scroller: "body",
        start: "top 35%",
        end: "top 45%",
        scrub: 2,
        // markers:true,


    }
})





var VanillaTilt = (function () {
    'use strict';

    /**
     * Created by Sergiu Șandor (micku7zu) on 1/27/2017.
     * Original idea: https://github.com/gijsroge/tilt.js
     * MIT License.
     * Version 1.8.1
     */

    class VanillaTilt {
        constructor(element, settings = {}) {
            if (!(element instanceof Node)) {
                throw ("Can't initialize VanillaTilt because " + element + " is not a Node.");
            }

            this.width = null;
            this.height = null;
            this.clientWidth = null;
            this.clientHeight = null;
            this.left = null;
            this.top = null;

            // for Gyroscope sampling
            this.gammazero = null;
            this.betazero = null;
            this.lastgammazero = null;
            this.lastbetazero = null;

            this.transitionTimeout = null;
            this.updateCall = null;
            this.event = null;

            this.updateBind = this.update.bind(this);
            this.resetBind = this.reset.bind(this);

            this.element = element;
            this.settings = this.extendSettings(settings);

            this.reverse = this.settings.reverse ? -1 : 1;
            this.resetToStart = VanillaTilt.isSettingTrue(this.settings["reset-to-start"]);
            this.glare = VanillaTilt.isSettingTrue(this.settings.glare);
            this.glarePrerender = VanillaTilt.isSettingTrue(this.settings["glare-prerender"]);
            this.fullPageListening = VanillaTilt.isSettingTrue(this.settings["full-page-listening"]);
            this.gyroscope = VanillaTilt.isSettingTrue(this.settings.gyroscope);
            this.gyroscopeSamples = this.settings.gyroscopeSamples;

            this.elementListener = this.getElementListener();

            if (this.glare) {
                this.prepareGlare();
            }

            if (this.fullPageListening) {
                this.updateClientSize();
            }

            this.addEventListeners();
            this.reset();

            if (this.resetToStart === false) {
                this.settings.startX = 0;
                this.settings.startY = 0;
            }
        }

        static isSettingTrue(setting) {
            return setting === "" || setting === true || setting === 1;
        }

        /**
         * Method returns element what will be listen mouse events
         * @return {Node}
         */
        getElementListener() {
            if (this.fullPageListening) {
                return window.document;
            }

            if (typeof this.settings["mouse-event-element"] === "string") {
                const mouseEventElement = document.querySelector(this.settings["mouse-event-element"]);

                if (mouseEventElement) {
                    return mouseEventElement;
                }
            }

            if (this.settings["mouse-event-element"] instanceof Node) {
                return this.settings["mouse-event-element"];
            }

            return this.element;
        }

        /**
         * Method set listen methods for this.elementListener
         * @return {Node}
         */
        addEventListeners() {
            this.onMouseEnterBind = this.onMouseEnter.bind(this);
            this.onMouseMoveBind = this.onMouseMove.bind(this);
            this.onMouseLeaveBind = this.onMouseLeave.bind(this);
            this.onWindowResizeBind = this.onWindowResize.bind(this);
            this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this);

            this.elementListener.addEventListener("mouseenter", this.onMouseEnterBind);
            this.elementListener.addEventListener("mouseleave", this.onMouseLeaveBind);
            this.elementListener.addEventListener("mousemove", this.onMouseMoveBind);

            if (this.glare || this.fullPageListening) {
                window.addEventListener("resize", this.onWindowResizeBind);
            }

            if (this.gyroscope) {
                window.addEventListener("deviceorientation", this.onDeviceOrientationBind);
            }
        }

        /**
         * Method remove event listeners from current this.elementListener
         */
        removeEventListeners() {
            this.elementListener.removeEventListener("mouseenter", this.onMouseEnterBind);
            this.elementListener.removeEventListener("mouseleave", this.onMouseLeaveBind);
            this.elementListener.removeEventListener("mousemove", this.onMouseMoveBind);

            if (this.gyroscope) {
                window.removeEventListener("deviceorientation", this.onDeviceOrientationBind);
            }

            if (this.glare || this.fullPageListening) {
                window.removeEventListener("resize", this.onWindowResizeBind);
            }
        }

        destroy() {
            clearTimeout(this.transitionTimeout);
            if (this.updateCall !== null) {
                cancelAnimationFrame(this.updateCall);
            }

            this.element.style.willChange = "";
            this.element.style.transition = "";
            this.element.style.transform = "";
            this.resetGlare();

            this.removeEventListeners();
            this.element.vanillaTilt = null;
            delete this.element.vanillaTilt;

            this.element = null;
        }

        onDeviceOrientation(event) {
            if (event.gamma === null || event.beta === null) {
                return;
            }

            this.updateElementPosition();

            if (this.gyroscopeSamples > 0) {
                this.lastgammazero = this.gammazero;
                this.lastbetazero = this.betazero;

                if (this.gammazero === null) {
                    this.gammazero = event.gamma;
                    this.betazero = event.beta;
                } else {
                    this.gammazero = (event.gamma + this.lastgammazero) / 2;
                    this.betazero = (event.beta + this.lastbetazero) / 2;
                }

                this.gyroscopeSamples -= 1;
            }

            const totalAngleX = this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX;
            const totalAngleY = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY;

            const degreesPerPixelX = totalAngleX / this.width;
            const degreesPerPixelY = totalAngleY / this.height;

            const angleX = event.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero);
            const angleY = event.beta - (this.settings.gyroscopeMinAngleY + this.betazero);

            const posX = angleX / degreesPerPixelX;
            const posY = angleY / degreesPerPixelY;

            if (this.updateCall !== null) {
                cancelAnimationFrame(this.updateCall);
            }

            this.event = {
                clientX: posX + this.left,
                clientY: posY + this.top,
            };

            this.updateCall = requestAnimationFrame(this.updateBind);
        }

        onMouseEnter() {
            this.updateElementPosition();
            this.element.style.willChange = "transform";
            this.setTransition();
        }

        onMouseMove(event) {
            if (this.updateCall !== null) {
                cancelAnimationFrame(this.updateCall);
            }

            this.event = event;
            this.updateCall = requestAnimationFrame(this.updateBind);
        }

        onMouseLeave() {
            this.setTransition();

            if (this.settings.reset) {
                requestAnimationFrame(this.resetBind);
            }
        }

        reset() {
            this.onMouseEnter();

            if (this.fullPageListening) {
                this.event = {
                    clientX: (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.clientWidth,
                    clientY: (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.clientHeight
                };
            } else {
                this.event = {
                    clientX: this.left + ((this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.width),
                    clientY: this.top + ((this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.height)
                };
            }

            let backupScale = this.settings.scale;
            this.settings.scale = 1;
            this.update();
            this.settings.scale = backupScale;
            this.resetGlare();
        }

        resetGlare() {
            if (this.glare) {
                this.glareElement.style.transform = "rotate(180deg) translate(-50%, -50%)";
                this.glareElement.style.opacity = "0";
            }
        }

        getValues() {
            let x, y;

            if (this.fullPageListening) {
                x = this.event.clientX / this.clientWidth;
                y = this.event.clientY / this.clientHeight;
            } else {
                x = (this.event.clientX - this.left) / this.width;
                y = (this.event.clientY - this.top) / this.height;
            }

            x = Math.min(Math.max(x, 0), 1);
            y = Math.min(Math.max(y, 0), 1);

            let tiltX = (this.reverse * (this.settings.max - x * this.settings.max * 2)).toFixed(2);
            let tiltY = (this.reverse * (y * this.settings.max * 2 - this.settings.max)).toFixed(2);
            let angle = Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI);

            return {
                tiltX: tiltX,
                tiltY: tiltY,
                percentageX: x * 100,
                percentageY: y * 100,
                angle: angle
            };
        }

        updateElementPosition() {
            let rect = this.element.getBoundingClientRect();

            this.width = this.element.offsetWidth;
            this.height = this.element.offsetHeight;
            this.left = rect.left;
            this.top = rect.top;
        }

        update() {
            let values = this.getValues();

            this.element.style.transform = "perspective(" + this.settings.perspective + "px) " +
                "rotateX(" + (this.settings.axis === "x" ? 0 : values.tiltY) + "deg) " +
                "rotateY(" + (this.settings.axis === "y" ? 0 : values.tiltX) + "deg) " +
                "scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")";

            if (this.glare) {
                this.glareElement.style.transform = `rotate(${values.angle}deg) translate(-50%, -50%)`;
                this.glareElement.style.opacity = `${values.percentageY * this.settings["max-glare"] / 100}`;
            }

            this.element.dispatchEvent(new CustomEvent("tiltChange", {
                "detail": values
            }));

            this.updateCall = null;
        }

        /**
         * Appends the glare element (if glarePrerender equals false)
         * and sets the default style
         */
        prepareGlare() {
            // If option pre-render is enabled we assume all html/css is present for an optimal glare effect.
            if (!this.glarePrerender) {
                // Create glare element
                const jsTiltGlare = document.createElement("div");
                jsTiltGlare.classList.add("js-tilt-glare");

                const jsTiltGlareInner = document.createElement("div");
                jsTiltGlareInner.classList.add("js-tilt-glare-inner");

                jsTiltGlare.appendChild(jsTiltGlareInner);
                this.element.appendChild(jsTiltGlare);
            }

            this.glareElementWrapper = this.element.querySelector(".js-tilt-glare");
            this.glareElement = this.element.querySelector(".js-tilt-glare-inner");

            if (this.glarePrerender) {
                return;
            }

            Object.assign(this.glareElementWrapper.style, {
                "position": "absolute",
                "top": "0",
                "left": "0",
                "width": "100%",
                "height": "100%",
                "overflow": "hidden",
                "pointer-events": "none",
                "border-radius": "inherit"
            });

            Object.assign(this.glareElement.style, {
                "position": "absolute",
                "top": "50%",
                "left": "50%",
                "pointer-events": "none",
                "background-image": `linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)`,
                "transform": "rotate(180deg) translate(-50%, -50%)",
                "transform-origin": "0% 0%",
                "opacity": "0"
            });

            this.updateGlareSize();
        }

        updateGlareSize() {
            if (this.glare) {
                const glareSize = (this.element.offsetWidth > this.element.offsetHeight ? this.element.offsetWidth : this.element.offsetHeight) * 2;

                Object.assign(this.glareElement.style, {
                    "width": `${glareSize}px`,
                    "height": `${glareSize}px`,
                });
            }
        }

        updateClientSize() {
            this.clientWidth = window.innerWidth
                || document.documentElement.clientWidth
                || document.body.clientWidth;

            this.clientHeight = window.innerHeight
                || document.documentElement.clientHeight
                || document.body.clientHeight;
        }

        onWindowResize() {
            this.updateGlareSize();
            this.updateClientSize();
        }

        setTransition() {
            clearTimeout(this.transitionTimeout);
            this.element.style.transition = this.settings.speed + "ms " + this.settings.easing;
            if (this.glare) this.glareElement.style.transition = `opacity ${this.settings.speed}ms ${this.settings.easing}`;

            this.transitionTimeout = setTimeout(() => {
                this.element.style.transition = "";
                if (this.glare) {
                    this.glareElement.style.transition = "";
                }
            }, this.settings.speed);

        }

        /**
         * Method return patched settings of instance
         * @param {boolean} settings.reverse - reverse the tilt direction
         * @param {number} settings.max - max tilt rotation (degrees)
         * @param {startX} settings.startX - the starting tilt on the X axis, in degrees. Default: 0
         * @param {startY} settings.startY - the starting tilt on the Y axis, in degrees. Default: 0
         * @param {number} settings.perspective - Transform perspective, the lower the more extreme the tilt gets
         * @param {string} settings.easing - Easing on enter/exit
         * @param {number} settings.scale - 2 = 200%, 1.5 = 150%, etc..
         * @param {number} settings.speed - Speed of the enter/exit transition
         * @param {boolean} settings.transition - Set a transition on enter/exit
         * @param {string|null} settings.axis - What axis should be enabled. Can be "x" or "y"
         * @param {boolean} settings.glare - if it should have a "glare" effect
         * @param {number} settings.max-glare - the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
         * @param {boolean} settings.glare-prerender - false = VanillaTilt creates the glare elements for you, otherwise
         * @param {boolean} settings.full-page-listening - If true, parallax effect will listen to mouse move events on the whole document, not only the selected element
         * @param {string|object} settings.mouse-event-element - String selector or link to HTML-element what will be listen mouse events
         * @param {boolean} settings.reset - false = If the tilt effect has to be reset on exit
         * @param {boolean} settings.reset-to-start - true = On reset event (mouse leave) will return to initial start angle (if startX or startY is set)
         * @param {gyroscope} settings.gyroscope - Enable tilting by deviceorientation events
         * @param {gyroscopeSensitivity} settings.gyroscopeSensitivity - Between 0 and 1 - The angle at which max tilt position is reached. 1 = 90deg, 0.5 = 45deg, etc..
         * @param {gyroscopeSamples} settings.gyroscopeSamples - How many gyroscope moves to decide the starting position.
         */
        extendSettings(settings) {
            let defaultSettings = {
                reverse: false,
                max: 15,
                startX: 0,
                startY: 0,
                perspective: 1000,
                easing: "cubic-bezier(.03,.98,.52,.99)",
                scale: 1,
                speed: 300,
                transition: true,
                axis: null,
                glare: false,
                "max-glare": 1,
                "glare-prerender": false,
                "full-page-listening": false,
                "mouse-event-element": null,
                reset: true,
                "reset-to-start": true,
                gyroscope: true,
                gyroscopeMinAngleX: -45,
                gyroscopeMaxAngleX: 45,
                gyroscopeMinAngleY: -45,
                gyroscopeMaxAngleY: 45,
                gyroscopeSamples: 10
            };

            let newSettings = {};
            for (var property in defaultSettings) {
                if (property in settings) {
                    newSettings[property] = settings[property];
                } else if (this.element.hasAttribute("data-tilt-" + property)) {
                    let attribute = this.element.getAttribute("data-tilt-" + property);
                    try {
                        newSettings[property] = JSON.parse(attribute);
                    } catch (e) {
                        newSettings[property] = attribute;
                    }

                } else {
                    newSettings[property] = defaultSettings[property];
                }
            }

            return newSettings;
        }

        static init(elements, settings) {
            if (elements instanceof Node) {
                elements = [elements];
            }

            if (elements instanceof NodeList) {
                elements = [].slice.call(elements);
            }

            if (!(elements instanceof Array)) {
                return;
            }

            elements.forEach((element) => {
                if (!("vanillaTilt" in element)) {
                    element.vanillaTilt = new VanillaTilt(element, settings);
                }
            });
        }
    }

    if (typeof document !== "undefined") {
        /* expose the class to window */
        window.VanillaTilt = VanillaTilt;

        /**
         * Auto load
         */
        VanillaTilt.init(document.querySelectorAll("[data-tilt]"));
    }

    return VanillaTilt;

}());
