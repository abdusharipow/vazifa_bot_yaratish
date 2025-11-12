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
                    [{text:"BMW ", callback_data: "bmw"}],
                    [{text:"Mersedes Benz ", callback_data: "mers"}],
                    [{text:"Audi", callback_data: "audi"}],
                    [{text:"Lamborghini",callback_data: "lambo"}]
                ]
            }
        })
    } else if (data == "mers") {
        bot.sendMessage(chatId,".....", {
            reply_markup:{
                inline_keyboard:[
                    [{text:"1",callback_data: "1"},{text:"2",callback_data: "2"},
                        {text:"3",callback_data: "3"},{text:"4",callback_data: "4"},
                        {text:"5",callback_data: "5"},{text:"6",callback_data: "6"},
                    ]
                ]
            }
        })
    } else if(data == "audi") {
        bot.sendMessage(chatId,"..." , {
            reply_markup:{
                inline_keyboard:[
                    [
                        {text:"1",callback_data: "1"},{text:"2",callback_data: "2"},
                        {text:"3",callback_data: "3"},{text:"4",callback_data: "4"},
                        {text:"5",callback_data: "5"},{text:"6",callback_data: "6"}
                    ]
                ]
            }
        })
    }
})
console.log("Bot ishga tushdi....");
