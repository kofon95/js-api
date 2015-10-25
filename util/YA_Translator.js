"use strict"
// using jQuery (ajax)

var YA_Translator = {
	key: "trnsl.1.1.20151020T033847Z.922fc037e11613df.7952c12e9932e591e6b9a28a129ee588fdd94515",

	getLang: function(text){
		return new Promise(function(resolve, reject){
			$.ajax({
				url: "https://translate.yandex.net/api/v1.5/tr.json/detect?text=" + text + "&key=" + key,
				success: function(res){
					resolve(res["lang"]);
				},
				error: function(err){
					reject(err);
				}});
		});
	},

	translate: function(text, lang){
		lang = lang || "en";

		return new Promise(function(resolve, reject){
			$.ajax({
				url: "https://translate.yandex.net/api/v1.5/tr.json/translate?key=" + key + "&text=" + text + "&lang=" + lang + "&options=1",
				success: function(res){
					resolve(res);
				},
				error: function(err){
					reject(err);
				}
			});
		})
	}
}
