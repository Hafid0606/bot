const { link } = require("fs-extra")

// edit it to change the bot's name
const botname = 'Lord Zeref' 

function help( pushname ) {
    return `👋Hi ${pushname}, I'm ${botname}!

*Support us by following us on instagram:*
https://instagram.com/devil_slayer141?igshid=y2wyntu8miqs

*Commands might be disabled because of spamming, or by group admin* 
*DON'T CALL OR YOU'LL BE BLOCKED*
*Read FAQ for rules!*

*My Prefix is ( - )*

🌟 Command List 🌟


*━━❰･User🎓Side･❱━━*


*CMD:* -profile
Description: *Displays the information of the user*

*CMD:* -info
Description: *Displays the information about the bot* 🌐

*CMD:* -sticker
Description: *Turns images into stickers* 🔖
Usage: -sticker as caption of picture

*CMD:* -gsticker <giphy URL>
Description: *Turns gifs into stickers* 🌠
Usage: -gsticker as caption of GIF

*CMD:* -sauce
Description: *Give's the title of the picture specified* ❤️
Usage: -sauce as the caption or reply of any picture

*CMD:* -inu
Description: *Displays picture of a random pup* 🐕

*CMD:* -pokemon
Description: Returns picture of a random Pokemon 😺

*CMD:* -waifu [Site is down]
Description: *Returns picture of a random waifu* 💌

*CMD:* -anime <anime name>
Description: *Returns the information of the given anime* 📺
Usage: -anime sakura trick

*-tts <language-code> <text>*
Description: *Converts text to speech* 🗣️
Usage: -tts en I love Lord Zeref

*-quotemaker | quote | author |*
Description: *Convert the given quote to an image*
Usage: -qm | Courage need not to be remembered, for it is never forgotten | Lord Zeref 🌌

*-lyrics <song name>*
Description: *Displays the lyricsof the given song* 🎶
Usage: -lyrics Shinzou wo sasageyo
            
*CMD:* -neko
Description: *Displays picture of a random cat* 🐈

*CMD:* -animeneko
Description: Displays picture of an anime cat ;) 💚

*CMD:* -wallpaper <keyword>
Description: *Returns a random anime wallpaper based on the keyword* 📱
Usage: -wallpaper Black Butler

*CMD:* -covid <country>
Description: *Displays the live stats of Covid-19 of the given country* 🌍
Usage: -covid Japan

*CMD:* -meme
Description: *Returns a random meme* 🎷 

*CMD:* -sr <subreddit_title>
Description: *Displays a post from the given subreddit* 💻
Usage: -sr Lord Zeref

*CMD:* -quotes [Disabled]
Description: *Returns a quote that will either give you existential crises or wisdom* 🌠

*CMD:* -groupinfo
Description: *Displays the information of the group* ⛱️

*CMD:* -roll
Description: *Rolls a dice* 🎲

*CMD:* -flip
Description: *Flips a coin* 🟡


*━━❰･Admin🎩Side･❱━━*


*CMD:* -delete
Description: *Deletes the Bot's message* 💔
Usage: Send -delete as reply to the bot's message

*CMD:* -seticon
Description: *Sets the quoted image as the group icon* 🎆

*CMD:* -ping <text>
Description: *Tags all members in the group* 🔊
Usage: -ping Well, in that case

*CMD:* -remove @user
Description: *Kicks the mentioned person from the group* 🏌️

*CMD:* -promote @user
Description: *Makes the metioned user admin* 👑

*CMD:* -demote @user
Description: *Demotes the mentioned user from adminship* 💔

*CMD:* -leave
Description: *Bot leaves the group* 💔


*━━❰･Pro🎗️Side･❱━━*


*CMD:* -register welcome/nsfw
Description: *Activate specific features such as welcoming new memebers and nsfw.*
Usage: -register welcome /-register nsfw

*CMD:* -unregister welcome/nsfw
Description: *deactivate specific features such as welcoming new memebers and nsfw.*
Usage: -unregister welcome /-unregister nsfw

*CMD:* -tsticker
Description: *Turns image into sticker without background*
Usage: -sticker as caption of picture


*━━❰･Group👑Owner･❱━━*


*CMD:* -kickall
Description: *Removes all members in the group* 🔊

There are many hidden and fun keywords ;)

Hope you have a great day!`
}
exports.help = help()
function info() {
    return '👋Hi there, I\'m LORD ZEREF\nThis project is open source, built using Javascript || Node.js. \n\n*Creators*👑\n\n_LORD ZEREF (DEVIL SLAYER)_ \n_RIKO HIAWO (MK)_ \n\n*Developers*✨\n \n_BADDERMAN_\n_DEVIL SLAYER_\n_Mk_\n\n*Contributors*💫\n\n_Shelltear_\n_Ban Takahiro_\n\n*_You can ask questions from my developer in our support group:https://chat.whatsapp.com/F4U2leVRvyM0o2BQo12F3C_*'
}
exports.info = info()