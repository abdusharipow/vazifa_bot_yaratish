import TelegramBot from "node-telegram-bot-api";
const TOKEN = "8449212445:AAEC5I3dzzQkY60knCrBJLRV9twaQ0yN15o"
const bot = new TelegramBot(TOKEN, { polling: true });
bot.on("message", async function (msg) {
    const chatId = msg.chat.id;
    const text = msg.text;
    const firstname = msg.chat.first_name;
    if (text == "/start") {
        bot.sendMessage(chatId, `Botimizga xush kelipsiz, ${firstname}`, {
            reply_markup: {
                keyboard: [
                    [{ text: "Boshlash 🔥" }]
                ],
                resize_keyboard: true
            }
        })
    } else if (text == "Boshlash 🔥") {
        const xabar = await bot.sendMessage(chatId, "Iltimos kuting....");

        setTimeout(function () {
            bot.deleteMessage(chatId, xabar.message_id);
            bot.sendMessage(chatId, "Bo'limni tanlang", {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Cars 🚗", callback_data: "cars" },
                            { text: "Settings ⚙️", callback_data: "set" }
                        ]
                    ]
                }
            })
        }, 1000)
    }

})
bot.on("callback_query", function (query) {
    const chatId = query.message.chat.id;
    const firstName = query.message.chat.first_name;
    const data = query.data;
    console.log(`chatId: ${chatId} ==> data: ${data}`);
    
    if(data == "cars") {
        bot.sendMessage(chatId,"Tanlang",{
            reply_markup:{
                inline_keyboard:[
                    [{text:"BMW ", callback_data: "bmw"}]
                    [{text:"Mersedes Benz ", callback_data: "mers"}]
                    [{text:"Audi", callback_data: "audi"}]
                ]
            }
        })
    }
})
console.log("Bot ishga tushdi....");
