'use strict';

const sleepTime = 1000;

new TypeIt('.home__title--strong', {
        loop: true,
        speed: 200,
    }) // Father|
    .pause(sleepTime*2)
    .move(-6)                   // |Farther
    .type('Amzing ')            // Amazing |Father
    .move(null, { to: 'END' })  // Amazing Father|
    .pause(sleepTime*4)
    .delete()                   //
    .type('Back-end Engineer')  // Back-end Engineer|
    .pause(sleepTime)
    .move(-13)                  // Back|-end Engineer
    .delete()                   // |-end Engineer
    .type('Front')              // Font|-end Engineer
    .move(null, { to: 'END' })  // Font-end Engineer|
    .pause(sleepTime)
    .move(-9)                   // Front-end| Engineer
    .delete()                   // | Engineer
    .type('Full-stack')         // Full-stack Engineer
    .move(null, { to: 'END' })  // Full-stack Engineer|
    .pause(sleepTime*2)
    .empty()                    // |
    .go();
