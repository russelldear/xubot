# Description:
#   Allows Hubot to know many languages.
#
# Commands:
#   hubot translate me <phrase> - Searches for a translation for the <phrase> and then prints that bad boy out.
#   hubot translate me from <source> into <target> <phrase> - Translates <phrase> from <source> into <target>. Both <source> and <target> are optional

languages =
  "af": "Afrikaans",
  "sq": "Albanian",
  "ar": "Arabic",
  "az": "Azerbaijani",
  "eu": "Basque",
  "bn": "Bengali",
  "be": "Belarusian",
  "bg": "Bulgarian",
  "ca": "Catalan",
  "zh-CN": "Simplified Chinese",
  "zh-TW": "Traditional Chinese",
  "hr": "Croatian",
  "cs": "Czech",
  "da": "Danish",
  "nl": "Dutch",
  "en": "English",
  "eo": "Esperanto",
  "et": "Estonian",
  "tl": "Filipino",
  "fi": "Finnish",
  "fr": "French",
  "gl": "Galician",
  "ka": "Georgian",
  "de": "German",
  "el": "Greek",
  "gu": "Gujarati",
  "ht": "Haitian Creole",
  "iw": "Hebrew",
  "hi": "Hindi",
  "hu": "Hungarian",
  "is": "Icelandic",
  "id": "Indonesian",
  "ga": "Irish",
  "it": "Italian",
  "ja": "Japanese",
  "kn": "Kannada",
  "ko": "Korean",
  "la": "Latin",
  "lv": "Latvian",
  "lt": "Lithuanian",
  "mk": "Macedonian",
  "ms": "Malay",
  "mt": "Maltese",
  "no": "Norwegian",
  "fa": "Persian",
  "pl": "Polish",
  "pt": "Portuguese",
  "ro": "Romanian",
  "ru": "Russian",
  "sr": "Serbian",
  "sk": "Slovak",
  "sl": "Slovenian",
  "es": "Spanish",
  "sw": "Swahili",
  "sv": "Swedish",
  "ta": "Tamil",
  "te": "Telugu",
  "th": "Thai",
  "tr": "Turkish",
  "uk": "Ukrainian",
  "ur": "Urdu",
  "vi": "Vietnamese",
  "cy": "Welsh",
  "yi": "Yiddish"

getCode = (language,languages) ->
  for code, lang of languages
      return code if lang.toLowerCase() is language.toLowerCase()

module.exports = (robot) ->
  language_choices = (language for _, language of languages).sort().join('|')
  pattern = new RegExp('translate(?: me)?' +
                       "(?: from (#{language_choices}))?" +
                       "(?: (?:in)?to (#{language_choices}))?" +
                       '(.*)', 'i')
  robot.respond pattern, (msg) ->
    term   = "\"#{msg.match[3]?.trim()}\""
    origin = if msg.match[1] isnt undefined then "&source=" + getCode(msg.match[1], languages) else ''
    target = if msg.match[2] isnt undefined then "&target=" + getCode(msg.match[2], languages) else '&target=en'

    url = "https://www.googleapis.com/language/translate/v2?key=AIzaSyA8TQEbhqfvQ-Zkl068BjFW4h4MqConEMc&q=" + term + origin + target
    console.log(url)
    msg.http(url)
      .get() (err, res, body) ->
        if err
          msg.send "Failed to connect to GAPI"
          robot.emit 'error', err, res
          return

        try
          console.log(body)
          if body.length > 4 and body[0] == '{'
            parsed = JSON.parse(body)
            
            console.log(parsed.data.translations[0].translatedText)
            
            translatedText = parsed.data.translations[0].translatedText
            language = parsed.data.translations[0].detectedSourceLanguage
            
            if parsed
              if msg.match[2] is undefined
                msg.send "#{term} is #{language} for #{translatedText}"
              else
                msg.send "The #{language} #{term} translates as #{translatedText} in #{languages[target]}"
          else
            throw new SyntaxError 'Invalid JS code'

        catch err
          msg.send "Failed to parse GAPI response"
          robot.emit 'error', err