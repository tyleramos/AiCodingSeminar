(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//
// strftime
// github.com/samsonjs/strftime
// @_sjs
//
// Copyright 2010 - 2016 Sami Samhuri <sami@samhuri.net>
//
// MIT License
// http://sjs.mit-license.org
//

;(function() {

    var Locales = {
        de_DE: {
            days: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
            shortDays: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
            months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
            shortMonths: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
            AM: 'AM',
            PM: 'PM',
            am: 'am',
            pm: 'pm',
            formats: {
                c: '%a %d %b %Y %X %Z',
                D: '%d.%m.%Y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%T',
                x: '%D'
            }
        },

        en_CA: {
            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
            shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            ordinalSuffixes: [
                'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
                'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
                'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
                'st'
            ],
            AM: 'AM',
            PM: 'PM',
            am: 'am',
            pm: 'pm',
            formats: {
                c: '%a %d %b %Y %X %Z',
                D: '%d/%m/%y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%r',
                x: '%D'
            }
        },

        en_US: {
            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
            shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            ordinalSuffixes: [
                'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
                'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
                'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
                'st'
            ],
            AM: 'AM',
            PM: 'PM',
            am: 'am',
            pm: 'pm',
            formats: {
                c: '%a %d %b %Y %X %Z',
                D: '%m/%d/%y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%r',
                x: '%D'
            }
        },

        es_MX: {
            days: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
            shortDays: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
            months: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre',' diciembre'],
            shortMonths: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
            AM: 'AM',
            PM: 'PM',
            am: 'am',
            pm: 'pm',
            formats: {
                c: '%a %d %b %Y %X %Z',
                D: '%d/%m/%Y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%T',
                x: '%D'
            }
        },

        fr_FR: {
            days: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
            shortDays: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
            months: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
            shortMonths: ['janv.', 'févr.', 'mars', 'avril', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
            AM: 'AM',
            PM: 'PM',
            am: 'am',
            pm: 'pm',
            formats: {
                c: '%a %d %b %Y %X %Z',
                D: '%d/%m/%Y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%T',
                x: '%D'
            }
        },

        it_IT: {
            days: ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'],
            shortDays: ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'],
            months: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'],
            shortMonths: ['pr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
            AM: 'AM',
            PM: 'PM',
            am: 'am',
            pm: 'pm',
            formats: {
                c: '%a %d %b %Y %X %Z',
                D: '%d/%m/%Y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%T',
                x: '%D'
            }
        },

        nl_NL: {
            days: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
            shortDays: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
            months: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
            shortMonths: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
            AM: 'AM',
            PM: 'PM',
            am: 'am',
            pm: 'pm',
            formats: {
                c: '%a %d %b %Y %X %Z',
                D: '%d-%m-%y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%T',
                x: '%D'
            }
        },

        pt_BR: {
            days: ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'],
            shortDays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
            months: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
            shortMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            AM: 'AM',
            PM: 'PM',
            am: 'am',
            pm: 'pm',
            formats: {
                c: '%a %d %b %Y %X %Z',
                D: '%d-%m-%Y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%T',
                x: '%D'
            }
        },

        ru_RU: {
            days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
            shortDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            shortMonths: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
            AM: 'AM',
            PM: 'PM',
            am: 'am',
            pm: 'pm',
            formats: {
                c: '%a %d %b %Y %X',
                D: '%d.%m.%y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%T',
                x: '%D'
            }
        },

        tr_TR: {
            days: ['Pazar', 'Pazartesi', 'Salı','Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
            shortDays: ['Paz', 'Pzt', 'Sal', 'Çrş', 'Prş', 'Cum', 'Cts'],
            months: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
            shortMonths: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
            AM: 'ÖÖ',
            PM: 'ÖS',
            am: 'ÖÖ',
            pm: 'ÖS',
            formats: {
                c: '%a %d %b %Y %X %Z',
                D: '%d-%m-%Y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%T',
                x: '%D'
            }
        },

        // By michaeljayt<michaeljayt@gmail.com>
        // https://github.com/michaeljayt/strftime/commit/bcb4c12743811d51e568175aa7bff3fd2a77cef3
        zh_CN: {
            days: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
            shortDays: ['日', '一', '二', '三', '四', '五', '六'],
            months: ['一月份', '二月份', '三月份', '四月份', '五月份', '六月份', '七月份', '八月份', '九月份', '十月份', '十一月份', '十二月份'],
            shortMonths: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            AM: '上午',
            PM: '下午',
            am: '上午',
            pm: '下午',
            formats: {
                c: '%a %d %b %Y %X %Z',
                D: '%d/%m/%y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%r',
                x: '%D'
            }
        }
    };

    var DefaultLocale = Locales['en_US'],
        defaultStrftime = new Strftime(DefaultLocale, 0, false),
        isCommonJS = typeof module !== 'undefined',
        namespace;

    // CommonJS / Node module
    if (isCommonJS) {
        namespace = module.exports = defaultStrftime;
    }
    // Browsers and other environments
    else {
        // Get the global object. Works in ES3, ES5, and ES5 strict mode.
        namespace = (function() { return this || (1,eval)('this'); }());
        namespace.strftime = defaultStrftime;
    }

    // Polyfill Date.now for old browsers.
    if (typeof Date.now !== 'function') {
        Date.now = function() {
          return +new Date();
        };
    }

    function Strftime(locale, customTimezoneOffset, useUtcTimezone) {
        var _locale = locale || DefaultLocale,
            _customTimezoneOffset = customTimezoneOffset || 0,
            _useUtcBasedDate = useUtcTimezone || false,

            // we store unix timestamp value here to not create new Date() each iteration (each millisecond)
            // Date.now() is 2 times faster than new Date()
            // while millisecond precise is enough here
            // this could be very helpful when strftime triggered a lot of times one by one
            _cachedDateTimestamp = 0,
            _cachedDate;

        function _strftime(format, date) {
            var timestamp;

            if (!date) {
                var currentTimestamp = Date.now();
                if (currentTimestamp > _cachedDateTimestamp) {
                    _cachedDateTimestamp = currentTimestamp;
                    _cachedDate = new Date(_cachedDateTimestamp);

                    timestamp = _cachedDateTimestamp;

                    if (_useUtcBasedDate) {
                        // how to avoid duplication of date instantiation for utc here?
                        // we tied to getTimezoneOffset of the current date
                        _cachedDate = new Date(_cachedDateTimestamp + getTimestampToUtcOffsetFor(_cachedDate) + _customTimezoneOffset);
                    }
                }
                else {
                  timestamp = _cachedDateTimestamp;
                }
                date = _cachedDate;
            }
            else {
                timestamp = date.getTime();

                if (_useUtcBasedDate) {
                    var utcOffset = getTimestampToUtcOffsetFor(date);
                    date = new Date(timestamp + utcOffset + _customTimezoneOffset);
                    // If we've crossed a DST boundary with this calculation we need to
                    // adjust the new date accordingly or it will be off by an hour in UTC.
                    if (getTimestampToUtcOffsetFor(date) !== utcOffset) {
                        var newUTCOffset = getTimestampToUtcOffsetFor(date);
                        date = new Date(timestamp + newUTCOffset + _customTimezoneOffset);
                    }
                }
            }

            return _processFormat(format, date, _locale, timestamp);
        }

        function _processFormat(format, date, locale, timestamp) {
            var resultString = '',
                padding = null,
                isInScope = false,
                length = format.length,
                extendedTZ = false;

            for (var i = 0; i < length; i++) {

                var currentCharCode = format.charCodeAt(i);

                if (isInScope === true) {
                    // '-'
                    if (currentCharCode === 45) {
                        padding = '';
                        continue;
                    }
                    // '_'
                    else if (currentCharCode === 95) {
                        padding = ' ';
                        continue;
                    }
                    // '0'
                    else if (currentCharCode === 48) {
                        padding = '0';
                        continue;
                    }
                    // ':'
                    else if (currentCharCode === 58) {
                      if (extendedTZ) {
                          warn("[WARNING] detected use of unsupported %:: or %::: modifiers to strftime");
                      }
                      extendedTZ = true;
                      continue;
                    }

                    switch (currentCharCode) {

                        // Examples for new Date(0) in GMT

                        // '%'
                        // case '%':
                        case 37:
                            resultString += '%';
                            break;

                        // 'Thursday'
                        // case 'A':
                        case 65:
                            resultString += locale.days[date.getDay()];
                            break;

                        // 'January'
                        // case 'B':
                        case 66:
                            resultString += locale.months[date.getMonth()];
                            break;

                        // '19'
                        // case 'C':
                        case 67:
                            resultString += padTill2(Math.floor(date.getFullYear() / 100), padding);
                            break;

                        // '01/01/70'
                        // case 'D':
                        case 68:
                            resultString += _processFormat(locale.formats.D, date, locale, timestamp);
                            break;

                        // '1970-01-01'
                        // case 'F':
                        case 70:
                            resultString += _processFormat(locale.formats.F, date, locale, timestamp);
                            break;

                        // '00'
                        // case 'H':
                        case 72:
                            resultString += padTill2(date.getHours(), padding);
                            break;

                        // '12'
                        // case 'I':
                        case 73:
                            resultString += padTill2(hours12(date.getHours()), padding);
                            break;

                        // '000'
                        // case 'L':
                        case 76:
                            resultString += padTill3(Math.floor(timestamp % 1000));
                            break;

                        // '00'
                        // case 'M':
                        case 77:
                            resultString += padTill2(date.getMinutes(), padding);
                            break;

                        // 'am'
                        // case 'P':
                        case 80:
                            resultString += date.getHours() < 12 ? locale.am : locale.pm;
                            break;

                        // '00:00'
                        // case 'R':
                        case 82:
                            resultString += _processFormat(locale.formats.R, date, locale, timestamp);
                            break;

                        // '00'
                        // case 'S':
                        case 83:
                            resultString += padTill2(date.getSeconds(), padding);
                            break;

                        // '00:00:00'
                        // case 'T':
                        case 84:
                            resultString += _processFormat(locale.formats.T, date, locale, timestamp);
                            break;

                        // '00'
                        // case 'U':
                        case 85:
                            resultString += padTill2(weekNumber(date, 'sunday'), padding);
                            break;

                        // '00'
                        // case 'W':
                        case 87:
                            resultString += padTill2(weekNumber(date, 'monday'), padding);
                            break;

                        // '16:00:00'
                        // case 'X':
                        case 88:
                            resultString += _processFormat(locale.formats.X, date, locale, timestamp);
                            break;

                        // '1970'
                        // case 'Y':
                        case 89:
                            resultString += date.getFullYear();
                            break;

                        // 'GMT'
                        // case 'Z':
                        case 90:
                            if (_useUtcBasedDate && _customTimezoneOffset === 0) {
                                resultString += "GMT";
                            }
                            else {
                                // fixme optimize
                                var tzString = date.toString().match(/\(([\w\s]+)\)/);
                                resultString += tzString && tzString[1] || '';
                            }
                            break;

                        // 'Thu'
                        // case 'a':
                        case 97:
                            resultString += locale.shortDays[date.getDay()];
                            break;

                        // 'Jan'
                        // case 'b':
                        case 98:
                            resultString += locale.shortMonths[date.getMonth()];
                            break;

                        // ''
                        // case 'c':
                        case 99:
                            resultString += _processFormat(locale.formats.c, date, locale, timestamp);
                            break;

                        // '01'
                        // case 'd':
                        case 100:
                            resultString += padTill2(date.getDate(), padding);
                            break;

                        // ' 1'
                        // case 'e':
                        case 101:
                            resultString += padTill2(date.getDate(), padding == null ? ' ' : padding);
                            break;

                        // 'Jan'
                        // case 'h':
                        case 104:
                            resultString += locale.shortMonths[date.getMonth()];
                            break;

                        // '000'
                        // case 'j':
                        case 106:
                            var y = new Date(date.getFullYear(), 0, 1);
                            var day = Math.ceil((date.getTime() - y.getTime()) / (1000 * 60 * 60 * 24));
                            resultString += padTill3(day);
                            break;

                        // ' 0'
                        // case 'k':
                        case 107:
                            resultString += padTill2(date.getHours(), padding == null ? ' ' : padding);
                            break;

                        // '12'
                        // case 'l':
                        case 108:
                            resultString += padTill2(hours12(date.getHours()), padding == null ? ' ' : padding);
                            break;

                        // '01'
                        // case 'm':
                        case 109:
                            resultString += padTill2(date.getMonth() + 1, padding);
                            break;

                        // '\n'
                        // case 'n':
                        case 110:
                            resultString += '\n';
                            break;

                        // '1st'
                        // case 'o':
                        case 111:
                            // Try to use an ordinal suffix from the locale, but fall back to using the old
                            // function for compatibility with old locales that lack them.
                            var day = date.getDate();
                            if (locale.ordinalSuffixes) {
                                resultString += String(day) + (locale.ordinalSuffixes[day - 1] || ordinal(day));
                            }
                            else {
                                resultString += String(day) + ordinal(day);
                            }
                            break;

                        // 'AM'
                        // case 'p':
                        case 112:
                            resultString += date.getHours() < 12 ? locale.AM : locale.PM;
                            break;

                        // '12:00:00 AM'
                        // case 'r':
                        case 114:
                            resultString += _processFormat(locale.formats.r, date, locale, timestamp);
                            break;

                        // '0'
                        // case 's':
                        case 115:
                            resultString += Math.floor(timestamp / 1000);
                            break;

                        // '\t'
                        // case 't':
                        case 116:
                            resultString += '\t';
                            break;

                        // '4'
                        // case 'u':
                        case 117:
                            var day = date.getDay();
                            resultString += day === 0 ? 7 : day;
                            break; // 1 - 7, Monday is first day of the week

                        // ' 1-Jan-1970'
                        // case 'v':
                        case 118:
                            resultString += _processFormat(locale.formats.v, date, locale, timestamp);
                            break;

                        // '4'
                        // case 'w':
                        case 119:
                            resultString += date.getDay();
                            break; // 0 - 6, Sunday is first day of the week

                        // '12/31/69'
                        // case 'x':
                        case 120:
                            resultString += _processFormat(locale.formats.x, date, locale, timestamp);
                            break;

                        // '70'
                        // case 'y':
                        case 121:
                            resultString += ('' + date.getFullYear()).slice(2);
                            break;

                        // '+0000'
                        // case 'z':
                        case 122:
                            if (_useUtcBasedDate && _customTimezoneOffset === 0) {
                                resultString += extendedTZ ? "+00:00" : "+0000";
                            }
                            else {
                                var off;
                                if (_customTimezoneOffset !== 0) {
                                    off = _customTimezoneOffset / (60 * 1000);
                                }
                                else {
                                    off = -date.getTimezoneOffset();
                                }
                                var sign = off < 0 ? '-' : '+';
                                var sep = extendedTZ ? ':' : '';
                                var hours = Math.floor(Math.abs(off / 60));
                                var mins = Math.abs(off % 60);
                                resultString += sign + padTill2(hours) + sep + padTill2(mins);
                            }
                            break;

                        default:
                            if (isInScope) {
                                resultString += '%';
                            }
                            resultString += format[i];
                            break;
                    }

                    padding = null;
                    isInScope = false;
                    continue;
                }

                // '%'
                if (currentCharCode === 37) {
                    isInScope = true;
                    continue;
                }

                resultString += format[i];
            }

            return resultString;
        }

        var strftime = _strftime;

        strftime.localize = function(locale) {
            return new Strftime(locale || _locale, _customTimezoneOffset, _useUtcBasedDate);
        };

        strftime.localizeByIdentifier = function(localeIdentifier) {
            var locale = Locales[localeIdentifier];
            if (!locale) {
                warn('[WARNING] No locale found with identifier "' + localeIdentifier + '".');
                return strftime;
            }
            return strftime.localize(locale);
        };

        strftime.timezone = function(timezone) {
            var customTimezoneOffset = _customTimezoneOffset;
            var useUtcBasedDate = _useUtcBasedDate;

            var timezoneType = typeof timezone;
            if (timezoneType === 'number' || timezoneType === 'string') {
                useUtcBasedDate = true;

                // ISO 8601 format timezone string, [-+]HHMM
                if (timezoneType === 'string') {
                    var sign = timezone[0] === '-' ? -1 : 1,
                        hours = parseInt(timezone.slice(1, 3), 10),
                        minutes = parseInt(timezone.slice(3, 5), 10);

                    customTimezoneOffset = sign * ((60 * hours) + minutes) * 60 * 1000;
                    // in minutes: 420
                }
                else if (timezoneType === 'number') {
                    customTimezoneOffset = timezone * 60 * 1000;
                }
            }

            return new Strftime(_locale, customTimezoneOffset, useUtcBasedDate);
        };

        strftime.utc = function() {
            return new Strftime(_locale, _customTimezoneOffset, true);
        };

        return strftime;
    }

    function padTill2(numberToPad, paddingChar) {
        if (paddingChar === '' || numberToPad > 9) {
            return numberToPad;
        }
        if (paddingChar == null) {
            paddingChar = '0';
        }
        return paddingChar + numberToPad;
    }

    function padTill3(numberToPad) {
        if (numberToPad > 99) {
            return numberToPad;
        }
        if (numberToPad > 9) {
            return '0' + numberToPad;
        }
        return '00' + numberToPad;
    }

    function hours12(hour) {
        if (hour === 0) {
            return 12;
        }
        else if (hour > 12) {
            return hour - 12;
        }
        return hour;
    }

    // firstWeekday: 'sunday' or 'monday', default is 'sunday'
    //
    // Pilfered & ported from Ruby's strftime implementation.
    function weekNumber(date, firstWeekday) {
        firstWeekday = firstWeekday || 'sunday';

        // This works by shifting the weekday back by one day if we
        // are treating Monday as the first day of the week.
        var weekday = date.getDay();
        if (firstWeekday === 'monday') {
            if (weekday === 0) // Sunday
                weekday = 6;
            else
                weekday--;
        }

        var firstDayOfYearUtc = Date.UTC(date.getFullYear(), 0, 1),
            dateUtc = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
            yday = Math.floor((dateUtc - firstDayOfYearUtc) / 86400000),
            weekNum = (yday + 7 - weekday) / 7;

        return Math.floor(weekNum);
    }

    // Get the ordinal suffix for a number: st, nd, rd, or th
    function ordinal(number) {
        var i = number % 10;
        var ii = number % 100;

        if ((ii >= 11 && ii <= 13) || i === 0 || i >= 4) {
            return 'th';
        }
        switch (i) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
        }
    }

    function getTimestampToUtcOffsetFor(date) {
        return (date.getTimezoneOffset() || 0) * 60000;
    }

    function warn(message) {
        if (typeof console !== 'undefined' && typeof console.warn == 'function') {
            console.warn(message)
        }
    }

}());

},{}],2:[function(require,module,exports){
$(function() {
  var strftime = require('strftime');

  var $time = $('.time');
  var $button = $('.button');

  var utc = false;

  var updateClockTime = function() {
    var offset = utc ? 4 : 0;
    var date = new Date( new Date().getTime() + offset * 3600 * 1000)

    $time.find('.hours').text(strftime('%l', date));
    $time.find('.minutes').text(strftime('%M', date));
    $time.find('.seconds').text(strftime('%S', date));
    $time.find('.ampm').text(strftime('%p', date));
  };

  var changeTimeZone = function() {
    utc = !utc;
    $button.toggleClass('pressed');
  };

  $button.on('click', function(event) {
    event.preventDefault();
    changeTimeZone();
  });

  setInterval(updateClockTime, 1000);
});

},{"strftime":1}],3:[function(require,module,exports){
$(function() {

});

},{}]},{},[2,3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvc3RyZnRpbWUvc3RyZnRpbWUuanMiLCJzcmMvanMvY2xvY2suanMiLCJzcmMvanMvdGltZXpvbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbHpCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy9cbi8vIHN0cmZ0aW1lXG4vLyBnaXRodWIuY29tL3NhbXNvbmpzL3N0cmZ0aW1lXG4vLyBAX3Nqc1xuLy9cbi8vIENvcHlyaWdodCAyMDEwIC0gMjAxNiBTYW1pIFNhbWh1cmkgPHNhbWlAc2FtaHVyaS5uZXQ+XG4vL1xuLy8gTUlUIExpY2Vuc2Vcbi8vIGh0dHA6Ly9zanMubWl0LWxpY2Vuc2Uub3JnXG4vL1xuXG47KGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIExvY2FsZXMgPSB7XG4gICAgICAgIGRlX0RFOiB7XG4gICAgICAgICAgICBkYXlzOiBbJ1Nvbm50YWcnLCAnTW9udGFnJywgJ0RpZW5zdGFnJywgJ01pdHR3b2NoJywgJ0Rvbm5lcnN0YWcnLCAnRnJlaXRhZycsICdTYW1zdGFnJ10sXG4gICAgICAgICAgICBzaG9ydERheXM6IFsnU28nLCAnTW8nLCAnRGknLCAnTWknLCAnRG8nLCAnRnInLCAnU2EnXSxcbiAgICAgICAgICAgIG1vbnRoczogWydKYW51YXInLCAnRmVicnVhcicsICdNw6RyeicsICdBcHJpbCcsICdNYWknLCAnSnVuaScsICdKdWxpJywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2t0b2JlcicsICdOb3ZlbWJlcicsICdEZXplbWJlciddLFxuICAgICAgICAgICAgc2hvcnRNb250aHM6IFsnSmFuJywgJ0ZlYicsICdNw6RyJywgJ0FwcicsICdNYWknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09rdCcsICdOb3YnLCAnRGV6J10sXG4gICAgICAgICAgICBBTTogJ0FNJyxcbiAgICAgICAgICAgIFBNOiAnUE0nLFxuICAgICAgICAgICAgYW06ICdhbScsXG4gICAgICAgICAgICBwbTogJ3BtJyxcbiAgICAgICAgICAgIGZvcm1hdHM6IHtcbiAgICAgICAgICAgICAgICBjOiAnJWEgJWQgJWIgJVkgJVggJVonLFxuICAgICAgICAgICAgICAgIEQ6ICclZC4lbS4lWScsXG4gICAgICAgICAgICAgICAgRjogJyVZLSVtLSVkJyxcbiAgICAgICAgICAgICAgICBSOiAnJUg6JU0nLFxuICAgICAgICAgICAgICAgIHI6ICclSTolTTolUyAlcCcsXG4gICAgICAgICAgICAgICAgVDogJyVIOiVNOiVTJyxcbiAgICAgICAgICAgICAgICB2OiAnJWUtJWItJVknLFxuICAgICAgICAgICAgICAgIFg6ICclVCcsXG4gICAgICAgICAgICAgICAgeDogJyVEJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGVuX0NBOiB7XG4gICAgICAgICAgICBkYXlzOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5JyBdLFxuICAgICAgICAgICAgc2hvcnREYXlzOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICAgICAgICAgICAgbW9udGhzOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXSxcbiAgICAgICAgICAgIHNob3J0TW9udGhzOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gICAgICAgICAgICBvcmRpbmFsU3VmZml4ZXM6IFtcbiAgICAgICAgICAgICAgICAnc3QnLCAnbmQnLCAncmQnLCAndGgnLCAndGgnLCAndGgnLCAndGgnLCAndGgnLCAndGgnLCAndGgnLFxuICAgICAgICAgICAgICAgICd0aCcsICd0aCcsICd0aCcsICd0aCcsICd0aCcsICd0aCcsICd0aCcsICd0aCcsICd0aCcsICd0aCcsXG4gICAgICAgICAgICAgICAgJ3N0JywgJ25kJywgJ3JkJywgJ3RoJywgJ3RoJywgJ3RoJywgJ3RoJywgJ3RoJywgJ3RoJywgJ3RoJyxcbiAgICAgICAgICAgICAgICAnc3QnXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgQU06ICdBTScsXG4gICAgICAgICAgICBQTTogJ1BNJyxcbiAgICAgICAgICAgIGFtOiAnYW0nLFxuICAgICAgICAgICAgcG06ICdwbScsXG4gICAgICAgICAgICBmb3JtYXRzOiB7XG4gICAgICAgICAgICAgICAgYzogJyVhICVkICViICVZICVYICVaJyxcbiAgICAgICAgICAgICAgICBEOiAnJWQvJW0vJXknLFxuICAgICAgICAgICAgICAgIEY6ICclWS0lbS0lZCcsXG4gICAgICAgICAgICAgICAgUjogJyVIOiVNJyxcbiAgICAgICAgICAgICAgICByOiAnJUk6JU06JVMgJXAnLFxuICAgICAgICAgICAgICAgIFQ6ICclSDolTTolUycsXG4gICAgICAgICAgICAgICAgdjogJyVlLSViLSVZJyxcbiAgICAgICAgICAgICAgICBYOiAnJXInLFxuICAgICAgICAgICAgICAgIHg6ICclRCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBlbl9VUzoge1xuICAgICAgICAgICAgZGF5czogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheScgXSxcbiAgICAgICAgICAgIHNob3J0RGF5czogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgICAgICAgICAgIG1vbnRoczogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ10sXG4gICAgICAgICAgICBzaG9ydE1vbnRoczogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICAgICAgICAgICAgb3JkaW5hbFN1ZmZpeGVzOiBbXG4gICAgICAgICAgICAgICAgJ3N0JywgJ25kJywgJ3JkJywgJ3RoJywgJ3RoJywgJ3RoJywgJ3RoJywgJ3RoJywgJ3RoJywgJ3RoJyxcbiAgICAgICAgICAgICAgICAndGgnLCAndGgnLCAndGgnLCAndGgnLCAndGgnLCAndGgnLCAndGgnLCAndGgnLCAndGgnLCAndGgnLFxuICAgICAgICAgICAgICAgICdzdCcsICduZCcsICdyZCcsICd0aCcsICd0aCcsICd0aCcsICd0aCcsICd0aCcsICd0aCcsICd0aCcsXG4gICAgICAgICAgICAgICAgJ3N0J1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIEFNOiAnQU0nLFxuICAgICAgICAgICAgUE06ICdQTScsXG4gICAgICAgICAgICBhbTogJ2FtJyxcbiAgICAgICAgICAgIHBtOiAncG0nLFxuICAgICAgICAgICAgZm9ybWF0czoge1xuICAgICAgICAgICAgICAgIGM6ICclYSAlZCAlYiAlWSAlWCAlWicsXG4gICAgICAgICAgICAgICAgRDogJyVtLyVkLyV5JyxcbiAgICAgICAgICAgICAgICBGOiAnJVktJW0tJWQnLFxuICAgICAgICAgICAgICAgIFI6ICclSDolTScsXG4gICAgICAgICAgICAgICAgcjogJyVJOiVNOiVTICVwJyxcbiAgICAgICAgICAgICAgICBUOiAnJUg6JU06JVMnLFxuICAgICAgICAgICAgICAgIHY6ICclZS0lYi0lWScsXG4gICAgICAgICAgICAgICAgWDogJyVyJyxcbiAgICAgICAgICAgICAgICB4OiAnJUQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZXNfTVg6IHtcbiAgICAgICAgICAgIGRheXM6IFsnZG9taW5nbycsICdsdW5lcycsICdtYXJ0ZXMnLCAnbWnDqXJjb2xlcycsICdqdWV2ZXMnLCAndmllcm5lcycsICdzw6FiYWRvJ10sXG4gICAgICAgICAgICBzaG9ydERheXM6IFsnZG9tJywgJ2x1bicsICdtYXInLCAnbWnDqScsICdqdWUnLCAndmllJywgJ3PDoWInXSxcbiAgICAgICAgICAgIG1vbnRoczogWydlbmVybycsICdmZWJyZXJvJywgJ21hcnpvJywgJ2FicmlsJywgJ21heW8nLCAnanVuaW8nLCAnanVsaW8nLCAnYWdvc3RvJywgJ3NlcHRpZW1icmUnLCAnb2N0dWJyZScsICdub3ZpZW1icmUnLCcgZGljaWVtYnJlJ10sXG4gICAgICAgICAgICBzaG9ydE1vbnRoczogWydlbmUnLCAnZmViJywgJ21hcicsICdhYnInLCAnbWF5JywgJ2p1bicsICdqdWwnLCAnYWdvJywgJ3NlcCcsICdvY3QnLCAnbm92JywgJ2RpYyddLFxuICAgICAgICAgICAgQU06ICdBTScsXG4gICAgICAgICAgICBQTTogJ1BNJyxcbiAgICAgICAgICAgIGFtOiAnYW0nLFxuICAgICAgICAgICAgcG06ICdwbScsXG4gICAgICAgICAgICBmb3JtYXRzOiB7XG4gICAgICAgICAgICAgICAgYzogJyVhICVkICViICVZICVYICVaJyxcbiAgICAgICAgICAgICAgICBEOiAnJWQvJW0vJVknLFxuICAgICAgICAgICAgICAgIEY6ICclWS0lbS0lZCcsXG4gICAgICAgICAgICAgICAgUjogJyVIOiVNJyxcbiAgICAgICAgICAgICAgICByOiAnJUk6JU06JVMgJXAnLFxuICAgICAgICAgICAgICAgIFQ6ICclSDolTTolUycsXG4gICAgICAgICAgICAgICAgdjogJyVlLSViLSVZJyxcbiAgICAgICAgICAgICAgICBYOiAnJVQnLFxuICAgICAgICAgICAgICAgIHg6ICclRCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBmcl9GUjoge1xuICAgICAgICAgICAgZGF5czogWydkaW1hbmNoZScsICdsdW5kaScsICdtYXJkaScsICdtZXJjcmVkaScsICdqZXVkaScsICd2ZW5kcmVkaScsICdzYW1lZGknXSxcbiAgICAgICAgICAgIHNob3J0RGF5czogWydkaW0uJywgJ2x1bi4nLCAnbWFyLicsICdtZXIuJywgJ2pldS4nLCAndmVuLicsICdzYW0uJ10sXG4gICAgICAgICAgICBtb250aHM6IFsnamFudmllcicsICdmw6l2cmllcicsICdtYXJzJywgJ2F2cmlsJywgJ21haScsICdqdWluJywgJ2p1aWxsZXQnLCAnYW/Du3QnLCAnc2VwdGVtYnJlJywgJ29jdG9icmUnLCAnbm92ZW1icmUnLCAnZMOpY2VtYnJlJ10sXG4gICAgICAgICAgICBzaG9ydE1vbnRoczogWydqYW52LicsICdmw6l2ci4nLCAnbWFycycsICdhdnJpbCcsICdtYWknLCAnanVpbicsICdqdWlsLicsICdhb8O7dCcsICdzZXB0LicsICdvY3QuJywgJ25vdi4nLCAnZMOpYy4nXSxcbiAgICAgICAgICAgIEFNOiAnQU0nLFxuICAgICAgICAgICAgUE06ICdQTScsXG4gICAgICAgICAgICBhbTogJ2FtJyxcbiAgICAgICAgICAgIHBtOiAncG0nLFxuICAgICAgICAgICAgZm9ybWF0czoge1xuICAgICAgICAgICAgICAgIGM6ICclYSAlZCAlYiAlWSAlWCAlWicsXG4gICAgICAgICAgICAgICAgRDogJyVkLyVtLyVZJyxcbiAgICAgICAgICAgICAgICBGOiAnJVktJW0tJWQnLFxuICAgICAgICAgICAgICAgIFI6ICclSDolTScsXG4gICAgICAgICAgICAgICAgcjogJyVJOiVNOiVTICVwJyxcbiAgICAgICAgICAgICAgICBUOiAnJUg6JU06JVMnLFxuICAgICAgICAgICAgICAgIHY6ICclZS0lYi0lWScsXG4gICAgICAgICAgICAgICAgWDogJyVUJyxcbiAgICAgICAgICAgICAgICB4OiAnJUQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaXRfSVQ6IHtcbiAgICAgICAgICAgIGRheXM6IFsnZG9tZW5pY2EnLCAnbHVuZWTDrCcsICdtYXJ0ZWTDrCcsICdtZXJjb2xlZMOsJywgJ2dpb3ZlZMOsJywgJ3ZlbmVyZMOsJywgJ3NhYmF0byddLFxuICAgICAgICAgICAgc2hvcnREYXlzOiBbJ2RvbScsICdsdW4nLCAnbWFyJywgJ21lcicsICdnaW8nLCAndmVuJywgJ3NhYiddLFxuICAgICAgICAgICAgbW9udGhzOiBbJ2dlbm5haW8nLCAnZmViYnJhaW8nLCAnbWFyem8nLCAnYXByaWxlJywgJ21hZ2dpbycsICdnaXVnbm8nLCAnbHVnbGlvJywgJ2Fnb3N0bycsICdzZXR0ZW1icmUnLCAnb3R0b2JyZScsICdub3ZlbWJyZScsICdkaWNlbWJyZSddLFxuICAgICAgICAgICAgc2hvcnRNb250aHM6IFsncHInLCAnbWFnJywgJ2dpdScsICdsdWcnLCAnYWdvJywgJ3NldCcsICdvdHQnLCAnbm92JywgJ2RpYyddLFxuICAgICAgICAgICAgQU06ICdBTScsXG4gICAgICAgICAgICBQTTogJ1BNJyxcbiAgICAgICAgICAgIGFtOiAnYW0nLFxuICAgICAgICAgICAgcG06ICdwbScsXG4gICAgICAgICAgICBmb3JtYXRzOiB7XG4gICAgICAgICAgICAgICAgYzogJyVhICVkICViICVZICVYICVaJyxcbiAgICAgICAgICAgICAgICBEOiAnJWQvJW0vJVknLFxuICAgICAgICAgICAgICAgIEY6ICclWS0lbS0lZCcsXG4gICAgICAgICAgICAgICAgUjogJyVIOiVNJyxcbiAgICAgICAgICAgICAgICByOiAnJUk6JU06JVMgJXAnLFxuICAgICAgICAgICAgICAgIFQ6ICclSDolTTolUycsXG4gICAgICAgICAgICAgICAgdjogJyVlLSViLSVZJyxcbiAgICAgICAgICAgICAgICBYOiAnJVQnLFxuICAgICAgICAgICAgICAgIHg6ICclRCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBubF9OTDoge1xuICAgICAgICAgICAgZGF5czogWyd6b25kYWcnLCAnbWFhbmRhZycsICdkaW5zZGFnJywgJ3dvZW5zZGFnJywgJ2RvbmRlcmRhZycsICd2cmlqZGFnJywgJ3phdGVyZGFnJ10sXG4gICAgICAgICAgICBzaG9ydERheXM6IFsnem8nLCAnbWEnLCAnZGknLCAnd28nLCAnZG8nLCAndnInLCAnemEnXSxcbiAgICAgICAgICAgIG1vbnRoczogWydqYW51YXJpJywgJ2ZlYnJ1YXJpJywgJ21hYXJ0JywgJ2FwcmlsJywgJ21laScsICdqdW5pJywgJ2p1bGknLCAnYXVndXN0dXMnLCAnc2VwdGVtYmVyJywgJ29rdG9iZXInLCAnbm92ZW1iZXInLCAnZGVjZW1iZXInXSxcbiAgICAgICAgICAgIHNob3J0TW9udGhzOiBbJ2phbicsICdmZWInLCAnbXJ0JywgJ2FwcicsICdtZWknLCAnanVuJywgJ2p1bCcsICdhdWcnLCAnc2VwJywgJ29rdCcsICdub3YnLCAnZGVjJ10sXG4gICAgICAgICAgICBBTTogJ0FNJyxcbiAgICAgICAgICAgIFBNOiAnUE0nLFxuICAgICAgICAgICAgYW06ICdhbScsXG4gICAgICAgICAgICBwbTogJ3BtJyxcbiAgICAgICAgICAgIGZvcm1hdHM6IHtcbiAgICAgICAgICAgICAgICBjOiAnJWEgJWQgJWIgJVkgJVggJVonLFxuICAgICAgICAgICAgICAgIEQ6ICclZC0lbS0leScsXG4gICAgICAgICAgICAgICAgRjogJyVZLSVtLSVkJyxcbiAgICAgICAgICAgICAgICBSOiAnJUg6JU0nLFxuICAgICAgICAgICAgICAgIHI6ICclSTolTTolUyAlcCcsXG4gICAgICAgICAgICAgICAgVDogJyVIOiVNOiVTJyxcbiAgICAgICAgICAgICAgICB2OiAnJWUtJWItJVknLFxuICAgICAgICAgICAgICAgIFg6ICclVCcsXG4gICAgICAgICAgICAgICAgeDogJyVEJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHB0X0JSOiB7XG4gICAgICAgICAgICBkYXlzOiBbJ2RvbWluZ28nLCAnc2VndW5kYScsICd0ZXLDp2EnLCAncXVhcnRhJywgJ3F1aW50YScsICdzZXh0YScsICdzw6FiYWRvJ10sXG4gICAgICAgICAgICBzaG9ydERheXM6IFsnRG9tJywgJ1NlZycsICdUZXInLCAnUXVhJywgJ1F1aScsICdTZXgnLCAnU8OhYiddLFxuICAgICAgICAgICAgbW9udGhzOiBbJ2phbmVpcm8nLCAnZmV2ZXJlaXJvJywgJ21hcsOnbycsICdhYnJpbCcsICdtYWlvJywgJ2p1bmhvJywgJ2p1bGhvJywgJ2Fnb3N0bycsICdzZXRlbWJybycsICdvdXR1YnJvJywgJ25vdmVtYnJvJywgJ2RlemVtYnJvJ10sXG4gICAgICAgICAgICBzaG9ydE1vbnRoczogWydKYW4nLCAnRmV2JywgJ01hcicsICdBYnInLCAnTWFpJywgJ0p1bicsICdKdWwnLCAnQWdvJywgJ1NldCcsICdPdXQnLCAnTm92JywgJ0RleiddLFxuICAgICAgICAgICAgQU06ICdBTScsXG4gICAgICAgICAgICBQTTogJ1BNJyxcbiAgICAgICAgICAgIGFtOiAnYW0nLFxuICAgICAgICAgICAgcG06ICdwbScsXG4gICAgICAgICAgICBmb3JtYXRzOiB7XG4gICAgICAgICAgICAgICAgYzogJyVhICVkICViICVZICVYICVaJyxcbiAgICAgICAgICAgICAgICBEOiAnJWQtJW0tJVknLFxuICAgICAgICAgICAgICAgIEY6ICclWS0lbS0lZCcsXG4gICAgICAgICAgICAgICAgUjogJyVIOiVNJyxcbiAgICAgICAgICAgICAgICByOiAnJUk6JU06JVMgJXAnLFxuICAgICAgICAgICAgICAgIFQ6ICclSDolTTolUycsXG4gICAgICAgICAgICAgICAgdjogJyVlLSViLSVZJyxcbiAgICAgICAgICAgICAgICBYOiAnJVQnLFxuICAgICAgICAgICAgICAgIHg6ICclRCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBydV9SVToge1xuICAgICAgICAgICAgZGF5czogWyfQktC+0YHQutGA0LXRgdC10L3RjNC1JywgJ9Cf0L7QvdC10LTQtdC70YzQvdC40LonLCAn0JLRgtC+0YDQvdC40LonLCAn0KHRgNC10LTQsCcsICfQp9C10YLQstC10YDQsycsICfQn9GP0YLQvdC40YbQsCcsICfQodGD0LHQsdC+0YLQsCddLFxuICAgICAgICAgICAgc2hvcnREYXlzOiBbJ9CS0YEnLCAn0J/QvScsICfQktGCJywgJ9Ch0YAnLCAn0KfRgicsICfQn9GCJywgJ9Ch0LEnXSxcbiAgICAgICAgICAgIG1vbnRoczogWyfQr9C90LLQsNGA0YwnLCAn0KTQtdCy0YDQsNC70YwnLCAn0JzQsNGA0YInLCAn0JDQv9GA0LXQu9GMJywgJ9Cc0LDQuScsICfQmNGO0L3RjCcsICfQmNGO0LvRjCcsICfQkNCy0LPRg9GB0YInLCAn0KHQtdC90YLRj9Cx0YDRjCcsICfQntC60YLRj9Cx0YDRjCcsICfQndC+0Y/QsdGA0YwnLCAn0JTQtdC60LDQsdGA0YwnXSxcbiAgICAgICAgICAgIHNob3J0TW9udGhzOiBbJ9GP0L3QsicsICfRhNC10LInLCAn0LzQsNGAJywgJ9Cw0L/RgCcsICfQvNCw0LknLCAn0LjRjtC9JywgJ9C40Y7QuycsICfQsNCy0LMnLCAn0YHQtdC9JywgJ9C+0LrRgicsICfQvdC+0Y8nLCAn0LTQtdC6J10sXG4gICAgICAgICAgICBBTTogJ0FNJyxcbiAgICAgICAgICAgIFBNOiAnUE0nLFxuICAgICAgICAgICAgYW06ICdhbScsXG4gICAgICAgICAgICBwbTogJ3BtJyxcbiAgICAgICAgICAgIGZvcm1hdHM6IHtcbiAgICAgICAgICAgICAgICBjOiAnJWEgJWQgJWIgJVkgJVgnLFxuICAgICAgICAgICAgICAgIEQ6ICclZC4lbS4leScsXG4gICAgICAgICAgICAgICAgRjogJyVZLSVtLSVkJyxcbiAgICAgICAgICAgICAgICBSOiAnJUg6JU0nLFxuICAgICAgICAgICAgICAgIHI6ICclSTolTTolUyAlcCcsXG4gICAgICAgICAgICAgICAgVDogJyVIOiVNOiVTJyxcbiAgICAgICAgICAgICAgICB2OiAnJWUtJWItJVknLFxuICAgICAgICAgICAgICAgIFg6ICclVCcsXG4gICAgICAgICAgICAgICAgeDogJyVEJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHRyX1RSOiB7XG4gICAgICAgICAgICBkYXlzOiBbJ1BhemFyJywgJ1BhemFydGVzaScsICdTYWzEsScsJ8OHYXLFn2FtYmEnLCAnUGVyxZ9lbWJlJywgJ0N1bWEnLCAnQ3VtYXJ0ZXNpJ10sXG4gICAgICAgICAgICBzaG9ydERheXM6IFsnUGF6JywgJ1B6dCcsICdTYWwnLCAnw4dyxZ8nLCAnUHLFnycsICdDdW0nLCAnQ3RzJ10sXG4gICAgICAgICAgICBtb250aHM6IFsnT2NhaycsICfFnnViYXQnLCAnTWFydCcsICdOaXNhbicsICdNYXnEsXMnLCAnSGF6aXJhbicsICdUZW1tdXonLCAnQcSfdXN0b3MnLCAnRXlsw7xsJywgJ0VraW0nLCAnS2FzxLFtJywgJ0FyYWzEsWsnXSxcbiAgICAgICAgICAgIHNob3J0TW9udGhzOiBbJ09jYScsICfFnnViJywgJ01hcicsICdOaXMnLCAnTWF5JywgJ0hheicsICdUZW0nLCAnQcSfdScsICdFeWwnLCAnRWtpJywgJ0thcycsICdBcmEnXSxcbiAgICAgICAgICAgIEFNOiAnw5bDlicsXG4gICAgICAgICAgICBQTTogJ8OWUycsXG4gICAgICAgICAgICBhbTogJ8OWw5YnLFxuICAgICAgICAgICAgcG06ICfDllMnLFxuICAgICAgICAgICAgZm9ybWF0czoge1xuICAgICAgICAgICAgICAgIGM6ICclYSAlZCAlYiAlWSAlWCAlWicsXG4gICAgICAgICAgICAgICAgRDogJyVkLSVtLSVZJyxcbiAgICAgICAgICAgICAgICBGOiAnJVktJW0tJWQnLFxuICAgICAgICAgICAgICAgIFI6ICclSDolTScsXG4gICAgICAgICAgICAgICAgcjogJyVJOiVNOiVTICVwJyxcbiAgICAgICAgICAgICAgICBUOiAnJUg6JU06JVMnLFxuICAgICAgICAgICAgICAgIHY6ICclZS0lYi0lWScsXG4gICAgICAgICAgICAgICAgWDogJyVUJyxcbiAgICAgICAgICAgICAgICB4OiAnJUQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gQnkgbWljaGFlbGpheXQ8bWljaGFlbGpheXRAZ21haWwuY29tPlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWljaGFlbGpheXQvc3RyZnRpbWUvY29tbWl0L2JjYjRjMTI3NDM4MTFkNTFlNTY4MTc1YWE3YmZmM2ZkMmE3N2NlZjNcbiAgICAgICAgemhfQ046IHtcbiAgICAgICAgICAgIGRheXM6IFsn5pif5pyf5pelJywgJ+aYn+acn+S4gCcsICfmmJ/mnJ/kuownLCAn5pif5pyf5LiJJywgJ+aYn+acn+WbmycsICfmmJ/mnJ/kupQnLCAn5pif5pyf5YWtJ10sXG4gICAgICAgICAgICBzaG9ydERheXM6IFsn5pelJywgJ+S4gCcsICfkuownLCAn5LiJJywgJ+WbmycsICfkupQnLCAn5YWtJ10sXG4gICAgICAgICAgICBtb250aHM6IFsn5LiA5pyI5Lu9JywgJ+S6jOaciOS7vScsICfkuInmnIjku70nLCAn5Zub5pyI5Lu9JywgJ+S6lOaciOS7vScsICflha3mnIjku70nLCAn5LiD5pyI5Lu9JywgJ+WFq+aciOS7vScsICfkuZ3mnIjku70nLCAn5Y2B5pyI5Lu9JywgJ+WNgeS4gOaciOS7vScsICfljYHkuozmnIjku70nXSxcbiAgICAgICAgICAgIHNob3J0TW9udGhzOiBbJ+S4gOaciCcsICfkuozmnIgnLCAn5LiJ5pyIJywgJ+Wbm+aciCcsICfkupTmnIgnLCAn5YWt5pyIJywgJ+S4g+aciCcsICflhavmnIgnLCAn5Lmd5pyIJywgJ+WNgeaciCcsICfljYHkuIDmnIgnLCAn5Y2B5LqM5pyIJ10sXG4gICAgICAgICAgICBBTTogJ+S4iuWNiCcsXG4gICAgICAgICAgICBQTTogJ+S4i+WNiCcsXG4gICAgICAgICAgICBhbTogJ+S4iuWNiCcsXG4gICAgICAgICAgICBwbTogJ+S4i+WNiCcsXG4gICAgICAgICAgICBmb3JtYXRzOiB7XG4gICAgICAgICAgICAgICAgYzogJyVhICVkICViICVZICVYICVaJyxcbiAgICAgICAgICAgICAgICBEOiAnJWQvJW0vJXknLFxuICAgICAgICAgICAgICAgIEY6ICclWS0lbS0lZCcsXG4gICAgICAgICAgICAgICAgUjogJyVIOiVNJyxcbiAgICAgICAgICAgICAgICByOiAnJUk6JU06JVMgJXAnLFxuICAgICAgICAgICAgICAgIFQ6ICclSDolTTolUycsXG4gICAgICAgICAgICAgICAgdjogJyVlLSViLSVZJyxcbiAgICAgICAgICAgICAgICBYOiAnJXInLFxuICAgICAgICAgICAgICAgIHg6ICclRCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgRGVmYXVsdExvY2FsZSA9IExvY2FsZXNbJ2VuX1VTJ10sXG4gICAgICAgIGRlZmF1bHRTdHJmdGltZSA9IG5ldyBTdHJmdGltZShEZWZhdWx0TG9jYWxlLCAwLCBmYWxzZSksXG4gICAgICAgIGlzQ29tbW9uSlMgPSB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyxcbiAgICAgICAgbmFtZXNwYWNlO1xuXG4gICAgLy8gQ29tbW9uSlMgLyBOb2RlIG1vZHVsZVxuICAgIGlmIChpc0NvbW1vbkpTKSB7XG4gICAgICAgIG5hbWVzcGFjZSA9IG1vZHVsZS5leHBvcnRzID0gZGVmYXVsdFN0cmZ0aW1lO1xuICAgIH1cbiAgICAvLyBCcm93c2VycyBhbmQgb3RoZXIgZW52aXJvbm1lbnRzXG4gICAgZWxzZSB7XG4gICAgICAgIC8vIEdldCB0aGUgZ2xvYmFsIG9iamVjdC4gV29ya3MgaW4gRVMzLCBFUzUsIGFuZCBFUzUgc3RyaWN0IG1vZGUuXG4gICAgICAgIG5hbWVzcGFjZSA9IChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfHwgKDEsZXZhbCkoJ3RoaXMnKTsgfSgpKTtcbiAgICAgICAgbmFtZXNwYWNlLnN0cmZ0aW1lID0gZGVmYXVsdFN0cmZ0aW1lO1xuICAgIH1cblxuICAgIC8vIFBvbHlmaWxsIERhdGUubm93IGZvciBvbGQgYnJvd3NlcnMuXG4gICAgaWYgKHR5cGVvZiBEYXRlLm5vdyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBEYXRlLm5vdyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiArbmV3IERhdGUoKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBTdHJmdGltZShsb2NhbGUsIGN1c3RvbVRpbWV6b25lT2Zmc2V0LCB1c2VVdGNUaW1lem9uZSkge1xuICAgICAgICB2YXIgX2xvY2FsZSA9IGxvY2FsZSB8fCBEZWZhdWx0TG9jYWxlLFxuICAgICAgICAgICAgX2N1c3RvbVRpbWV6b25lT2Zmc2V0ID0gY3VzdG9tVGltZXpvbmVPZmZzZXQgfHwgMCxcbiAgICAgICAgICAgIF91c2VVdGNCYXNlZERhdGUgPSB1c2VVdGNUaW1lem9uZSB8fCBmYWxzZSxcblxuICAgICAgICAgICAgLy8gd2Ugc3RvcmUgdW5peCB0aW1lc3RhbXAgdmFsdWUgaGVyZSB0byBub3QgY3JlYXRlIG5ldyBEYXRlKCkgZWFjaCBpdGVyYXRpb24gKGVhY2ggbWlsbGlzZWNvbmQpXG4gICAgICAgICAgICAvLyBEYXRlLm5vdygpIGlzIDIgdGltZXMgZmFzdGVyIHRoYW4gbmV3IERhdGUoKVxuICAgICAgICAgICAgLy8gd2hpbGUgbWlsbGlzZWNvbmQgcHJlY2lzZSBpcyBlbm91Z2ggaGVyZVxuICAgICAgICAgICAgLy8gdGhpcyBjb3VsZCBiZSB2ZXJ5IGhlbHBmdWwgd2hlbiBzdHJmdGltZSB0cmlnZ2VyZWQgYSBsb3Qgb2YgdGltZXMgb25lIGJ5IG9uZVxuICAgICAgICAgICAgX2NhY2hlZERhdGVUaW1lc3RhbXAgPSAwLFxuICAgICAgICAgICAgX2NhY2hlZERhdGU7XG5cbiAgICAgICAgZnVuY3Rpb24gX3N0cmZ0aW1lKGZvcm1hdCwgZGF0ZSkge1xuICAgICAgICAgICAgdmFyIHRpbWVzdGFtcDtcblxuICAgICAgICAgICAgaWYgKCFkYXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRUaW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGltZXN0YW1wID4gX2NhY2hlZERhdGVUaW1lc3RhbXApIHtcbiAgICAgICAgICAgICAgICAgICAgX2NhY2hlZERhdGVUaW1lc3RhbXAgPSBjdXJyZW50VGltZXN0YW1wO1xuICAgICAgICAgICAgICAgICAgICBfY2FjaGVkRGF0ZSA9IG5ldyBEYXRlKF9jYWNoZWREYXRlVGltZXN0YW1wKTtcblxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXAgPSBfY2FjaGVkRGF0ZVRpbWVzdGFtcDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoX3VzZVV0Y0Jhc2VkRGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaG93IHRvIGF2b2lkIGR1cGxpY2F0aW9uIG9mIGRhdGUgaW5zdGFudGlhdGlvbiBmb3IgdXRjIGhlcmU/XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSB0aWVkIHRvIGdldFRpbWV6b25lT2Zmc2V0IG9mIHRoZSBjdXJyZW50IGRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jYWNoZWREYXRlID0gbmV3IERhdGUoX2NhY2hlZERhdGVUaW1lc3RhbXAgKyBnZXRUaW1lc3RhbXBUb1V0Y09mZnNldEZvcihfY2FjaGVkRGF0ZSkgKyBfY3VzdG9tVGltZXpvbmVPZmZzZXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGltZXN0YW1wID0gX2NhY2hlZERhdGVUaW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRhdGUgPSBfY2FjaGVkRGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF91c2VVdGNCYXNlZERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHV0Y09mZnNldCA9IGdldFRpbWVzdGFtcFRvVXRjT2Zmc2V0Rm9yKGRhdGUpO1xuICAgICAgICAgICAgICAgICAgICBkYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdXRjT2Zmc2V0ICsgX2N1c3RvbVRpbWV6b25lT2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UndmUgY3Jvc3NlZCBhIERTVCBib3VuZGFyeSB3aXRoIHRoaXMgY2FsY3VsYXRpb24gd2UgbmVlZCB0b1xuICAgICAgICAgICAgICAgICAgICAvLyBhZGp1c3QgdGhlIG5ldyBkYXRlIGFjY29yZGluZ2x5IG9yIGl0IHdpbGwgYmUgb2ZmIGJ5IGFuIGhvdXIgaW4gVVRDLlxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0VGltZXN0YW1wVG9VdGNPZmZzZXRGb3IoZGF0ZSkgIT09IHV0Y09mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1VUQ09mZnNldCA9IGdldFRpbWVzdGFtcFRvVXRjT2Zmc2V0Rm9yKGRhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIG5ld1VUQ09mZnNldCArIF9jdXN0b21UaW1lem9uZU9mZnNldCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBfcHJvY2Vzc0Zvcm1hdChmb3JtYXQsIGRhdGUsIF9sb2NhbGUsIHRpbWVzdGFtcCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBfcHJvY2Vzc0Zvcm1hdChmb3JtYXQsIGRhdGUsIGxvY2FsZSwgdGltZXN0YW1wKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0U3RyaW5nID0gJycsXG4gICAgICAgICAgICAgICAgcGFkZGluZyA9IG51bGwsXG4gICAgICAgICAgICAgICAgaXNJblNjb3BlID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gZm9ybWF0Lmxlbmd0aCxcbiAgICAgICAgICAgICAgICBleHRlbmRlZFRaID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50Q2hhckNvZGUgPSBmb3JtYXQuY2hhckNvZGVBdChpKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc0luU2NvcGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gJy0nXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Q2hhckNvZGUgPT09IDQ1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAnXydcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY3VycmVudENoYXJDb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZyA9ICcgJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICcwJ1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjdXJyZW50Q2hhckNvZGUgPT09IDQ4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nID0gJzAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gJzonXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJlbnRDaGFyQ29kZSA9PT0gNTgpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZXh0ZW5kZWRUWikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJuKFwiW1dBUk5JTkddIGRldGVjdGVkIHVzZSBvZiB1bnN1cHBvcnRlZCAlOjogb3IgJTo6OiBtb2RpZmllcnMgdG8gc3RyZnRpbWVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGV4dGVuZGVkVFogPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChjdXJyZW50Q2hhckNvZGUpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXhhbXBsZXMgZm9yIG5ldyBEYXRlKDApIGluIEdNVFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAnJSdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgJyUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmcgKz0gJyUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAnVGh1cnNkYXknXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlICdBJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0U3RyaW5nICs9IGxvY2FsZS5kYXlzW2RhdGUuZ2V0RGF5KCldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAnSmFudWFyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgJ0InOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2NjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmcgKz0gbG9jYWxlLm1vbnRoc1tkYXRlLmdldE1vbnRoKCldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAnMTknXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlICdDJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0U3RyaW5nICs9IHBhZFRpbGwyKE1hdGguZmxvb3IoZGF0ZS5nZXRGdWxsWWVhcigpIC8gMTAwKSwgcGFkZGluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICcwMS8wMS83MCdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgJ0QnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2ODpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmcgKz0gX3Byb2Nlc3NGb3JtYXQobG9jYWxlLmZvcm1hdHMuRCwgZGF0ZSwgbG9jYWxlLCB0aW1lc3RhbXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAnMTk3MC0wMS0wMSdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgJ0YnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA3MDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmcgKz0gX3Byb2Nlc3NGb3JtYXQobG9jYWxlLmZvcm1hdHMuRiwgZGF0ZSwgbG9jYWxlLCB0aW1lc3RhbXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAnMDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlICdIJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNzI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0U3RyaW5nICs9IHBhZFRpbGwyKGRhdGUuZ2V0SG91cnMoKSwgcGFkZGluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICcxMidcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgJ0knOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA3MzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmcgKz0gcGFkVGlsbDIoaG91cnMxMihkYXRlLmdldEhvdXJzKCkpLCBwYWRkaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJzAwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgJ0wnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA3NjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmcgKz0gcGFkVGlsbDMoTWF0aC5mbG9vcih0aW1lc3RhbXAgJSAxMDAwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICcwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgJ00nOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA3NzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmcgKz0gcGFkVGlsbDIoZGF0ZS5nZXRNaW51dGVzKCksIHBhZGRpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAnYW0nXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlICdQJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgODA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0U3RyaW5nICs9IGRhdGUuZ2V0SG91cnMoKSA8IDEyID8gbG9jYWxlLmFtIDogbG9jYWxlLnBtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAnMDA6MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlICdSJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgODI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0U3RyaW5nICs9IF9wcm9jZXNzRm9ybWF0KGxvY2FsZS5mb3JtYXRzLlIsIGRhdGUsIGxvY2FsZSwgdGltZXN0YW1wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJzAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSAnUyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDgzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFN0cmluZyArPSBwYWRUaWxsMihkYXRlLmdldFNlY29uZHMoKSwgcGFkZGluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICcwMDowMDowMCdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgJ1QnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA4NDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmcgKz0gX3Byb2Nlc3NGb3JtYXQobG9jYWxlLmZvcm1hdHMuVCwgZGF0ZSwgbG9jYWxlLCB0aW1lc3RhbXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAnMDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlICdVJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgODU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0U3RyaW5nICs9IHBhZFRpbGwyKHdlZWtOdW1iZXIoZGF0ZSwgJ3N1bmRheScpLCBwYWRkaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJzAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSAnVyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDg3OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFN0cmluZyArPSBwYWRUaWxsMih3ZWVrTnVtYmVyKGRhdGUsICdtb25kYXknKSwgcGFkZGluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICcxNjowMDowMCdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgJ1gnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA4ODpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmcgKz0gX3Byb2Nlc3NGb3JtYXQobG9jYWxlLmZvcm1hdHMuWCwgZGF0ZSwgbG9jYWxlLCB0aW1lc3RhbXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAnMTk3MCdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgJ1knOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA4OTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmcgKz0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAnR01UJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSAnWic6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDkwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdXNlVXRjQmFzZWREYXRlICYmIF9jdXN0b21UaW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmcgKz0gXCJHTVRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZpeG1lIG9wdGltaXplXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0elN0cmluZyA9IGRhdGUudG9TdHJpbmcoKS5tYXRjaCgvXFwoKFtcXHdcXHNdKylcXCkvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0U3RyaW5nICs9IHR6U3RyaW5nICYmIHR6U3RyaW5nWzFdIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJ1RodSdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgJ2EnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA5NzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmcgKz0gbG9jYWxlLnNob3J0RGF5c1tkYXRlLmdldERheSgpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJ0phbidcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgJ2InOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA5ODpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmcgKz0gbG9jYWxlLnNob3J0TW9udGhzW2RhdGUuZ2V0TW9udGgoKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlICdjJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgOTk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0U3RyaW5nICs9IF9wcm9jZXNzRm9ybWF0KGxvY2FsZS5mb3JtYXRzLmMsIGRhdGUsIGxvY2FsZSwgdGltZXN0YW1wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJzAxJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSAnZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmcgKz0gcGFkVGlsbDIoZGF0ZS5nZXREYXRlKCksIHBhZGRpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAnIDEnXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlICdlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFN0cmluZyArPSBwYWRUaWxsMihkYXRlLmdldERhdGUoKSwgcGFkZGluZyA9PSBudWxsID8gJyAnIDogcGFkZGluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICdKYW4nXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlICdoJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFN0cmluZyArPSBsb2NhbGUuc2hvcnRNb250aHNbZGF0ZS5nZXRNb250aCgpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJzAwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgJ2onOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDY6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXkgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VGltZSgpIC0geS5nZXRUaW1lKCkpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmcgKz0gcGFkVGlsbDMoZGF5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJyAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSAnayc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwNzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmcgKz0gcGFkVGlsbDIoZGF0ZS5nZXRIb3VycygpLCBwYWRkaW5nID09IG51bGwgPyAnICcgOiBwYWRkaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJzEyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSAnbCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwODpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmcgKz0gcGFkVGlsbDIoaG91cnMxMihkYXRlLmdldEhvdXJzKCkpLCBwYWRkaW5nID09IG51bGwgPyAnICcgOiBwYWRkaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJzAxJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSAnbSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmcgKz0gcGFkVGlsbDIoZGF0ZS5nZXRNb250aCgpICsgMSwgcGFkZGluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICdcXG4nXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlICduJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTEwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFN0cmluZyArPSAnXFxuJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJzFzdCdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgJ28nOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVHJ5IHRvIHVzZSBhbiBvcmRpbmFsIHN1ZmZpeCBmcm9tIHRoZSBsb2NhbGUsIGJ1dCBmYWxsIGJhY2sgdG8gdXNpbmcgdGhlIG9sZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggb2xkIGxvY2FsZXMgdGhhdCBsYWNrIHRoZW0uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2NhbGUub3JkaW5hbFN1ZmZpeGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFN0cmluZyArPSBTdHJpbmcoZGF5KSArIChsb2NhbGUub3JkaW5hbFN1ZmZpeGVzW2RheSAtIDFdIHx8IG9yZGluYWwoZGF5KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmcgKz0gU3RyaW5nKGRheSkgKyBvcmRpbmFsKGRheSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAnQU0nXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlICdwJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTEyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFN0cmluZyArPSBkYXRlLmdldEhvdXJzKCkgPCAxMiA/IGxvY2FsZS5BTSA6IGxvY2FsZS5QTTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJzEyOjAwOjAwIEFNJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSAncic6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDExNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmcgKz0gX3Byb2Nlc3NGb3JtYXQobG9jYWxlLmZvcm1hdHMuciwgZGF0ZSwgbG9jYWxlLCB0aW1lc3RhbXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAnMCdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgJ3MnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0U3RyaW5nICs9IE1hdGguZmxvb3IodGltZXN0YW1wIC8gMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICdcXHQnXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlICd0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTE2OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFN0cmluZyArPSAnXFx0JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJzQnXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlICd1JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTE3OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFN0cmluZyArPSBkYXkgPT09IDAgPyA3IDogZGF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAvLyAxIC0gNywgTW9uZGF5IGlzIGZpcnN0IGRheSBvZiB0aGUgd2Vla1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAnIDEtSmFuLTE5NzAnXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlICd2JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTE4OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFN0cmluZyArPSBfcHJvY2Vzc0Zvcm1hdChsb2NhbGUuZm9ybWF0cy52LCBkYXRlLCBsb2NhbGUsIHRpbWVzdGFtcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICc0J1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSAndyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDExOTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmcgKz0gZGF0ZS5nZXREYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgLy8gMCAtIDYsIFN1bmRheSBpcyBmaXJzdCBkYXkgb2YgdGhlIHdlZWtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJzEyLzMxLzY5J1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSAneCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEyMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmcgKz0gX3Byb2Nlc3NGb3JtYXQobG9jYWxlLmZvcm1hdHMueCwgZGF0ZSwgbG9jYWxlLCB0aW1lc3RhbXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAnNzAnXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlICd5JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTIxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFN0cmluZyArPSAoJycgKyBkYXRlLmdldEZ1bGxZZWFyKCkpLnNsaWNlKDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAnKzAwMDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlICd6JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTIyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdXNlVXRjQmFzZWREYXRlICYmIF9jdXN0b21UaW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmcgKz0gZXh0ZW5kZWRUWiA/IFwiKzAwOjAwXCIgOiBcIiswMDAwXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2ZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2N1c3RvbVRpbWV6b25lT2Zmc2V0ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmYgPSBfY3VzdG9tVGltZXpvbmVPZmZzZXQgLyAoNjAgKiAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZiA9IC1kYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNpZ24gPSBvZmYgPCAwID8gJy0nIDogJysnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VwID0gZXh0ZW5kZWRUWiA/ICc6JyA6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKE1hdGguYWJzKG9mZiAvIDYwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW5zID0gTWF0aC5hYnMob2ZmICUgNjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmcgKz0gc2lnbiArIHBhZFRpbGwyKGhvdXJzKSArIHNlcCArIHBhZFRpbGwyKG1pbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNJblNjb3BlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFN0cmluZyArPSAnJSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFN0cmluZyArPSBmb3JtYXRbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgaXNJblNjb3BlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vICclJ1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Q2hhckNvZGUgPT09IDM3KSB7XG4gICAgICAgICAgICAgICAgICAgIGlzSW5TY29wZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc3VsdFN0cmluZyArPSBmb3JtYXRbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHRTdHJpbmc7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3RyZnRpbWUgPSBfc3RyZnRpbWU7XG5cbiAgICAgICAgc3RyZnRpbWUubG9jYWxpemUgPSBmdW5jdGlvbihsb2NhbGUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3RyZnRpbWUobG9jYWxlIHx8IF9sb2NhbGUsIF9jdXN0b21UaW1lem9uZU9mZnNldCwgX3VzZVV0Y0Jhc2VkRGF0ZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgc3RyZnRpbWUubG9jYWxpemVCeUlkZW50aWZpZXIgPSBmdW5jdGlvbihsb2NhbGVJZGVudGlmaWVyKSB7XG4gICAgICAgICAgICB2YXIgbG9jYWxlID0gTG9jYWxlc1tsb2NhbGVJZGVudGlmaWVyXTtcbiAgICAgICAgICAgIGlmICghbG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgd2FybignW1dBUk5JTkddIE5vIGxvY2FsZSBmb3VuZCB3aXRoIGlkZW50aWZpZXIgXCInICsgbG9jYWxlSWRlbnRpZmllciArICdcIi4nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyZnRpbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3RyZnRpbWUubG9jYWxpemUobG9jYWxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBzdHJmdGltZS50aW1lem9uZSA9IGZ1bmN0aW9uKHRpbWV6b25lKSB7XG4gICAgICAgICAgICB2YXIgY3VzdG9tVGltZXpvbmVPZmZzZXQgPSBfY3VzdG9tVGltZXpvbmVPZmZzZXQ7XG4gICAgICAgICAgICB2YXIgdXNlVXRjQmFzZWREYXRlID0gX3VzZVV0Y0Jhc2VkRGF0ZTtcblxuICAgICAgICAgICAgdmFyIHRpbWV6b25lVHlwZSA9IHR5cGVvZiB0aW1lem9uZTtcbiAgICAgICAgICAgIGlmICh0aW1lem9uZVR5cGUgPT09ICdudW1iZXInIHx8IHRpbWV6b25lVHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB1c2VVdGNCYXNlZERhdGUgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgLy8gSVNPIDg2MDEgZm9ybWF0IHRpbWV6b25lIHN0cmluZywgWy0rXUhITU1cbiAgICAgICAgICAgICAgICBpZiAodGltZXpvbmVUeXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2lnbiA9IHRpbWV6b25lWzBdID09PSAnLScgPyAtMSA6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBob3VycyA9IHBhcnNlSW50KHRpbWV6b25lLnNsaWNlKDEsIDMpLCAxMCksXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVzID0gcGFyc2VJbnQodGltZXpvbmUuc2xpY2UoMywgNSksIDEwKTtcblxuICAgICAgICAgICAgICAgICAgICBjdXN0b21UaW1lem9uZU9mZnNldCA9IHNpZ24gKiAoKDYwICogaG91cnMpICsgbWludXRlcykgKiA2MCAqIDEwMDA7XG4gICAgICAgICAgICAgICAgICAgIC8vIGluIG1pbnV0ZXM6IDQyMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aW1lem9uZVR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbVRpbWV6b25lT2Zmc2V0ID0gdGltZXpvbmUgKiA2MCAqIDEwMDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFN0cmZ0aW1lKF9sb2NhbGUsIGN1c3RvbVRpbWV6b25lT2Zmc2V0LCB1c2VVdGNCYXNlZERhdGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHN0cmZ0aW1lLnV0YyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdHJmdGltZShfbG9jYWxlLCBfY3VzdG9tVGltZXpvbmVPZmZzZXQsIHRydWUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBzdHJmdGltZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYWRUaWxsMihudW1iZXJUb1BhZCwgcGFkZGluZ0NoYXIpIHtcbiAgICAgICAgaWYgKHBhZGRpbmdDaGFyID09PSAnJyB8fCBudW1iZXJUb1BhZCA+IDkpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJUb1BhZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFkZGluZ0NoYXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgcGFkZGluZ0NoYXIgPSAnMCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhZGRpbmdDaGFyICsgbnVtYmVyVG9QYWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFkVGlsbDMobnVtYmVyVG9QYWQpIHtcbiAgICAgICAgaWYgKG51bWJlclRvUGFkID4gOTkpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJUb1BhZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobnVtYmVyVG9QYWQgPiA5KSB7XG4gICAgICAgICAgICByZXR1cm4gJzAnICsgbnVtYmVyVG9QYWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcwMCcgKyBudW1iZXJUb1BhZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBob3VyczEyKGhvdXIpIHtcbiAgICAgICAgaWYgKGhvdXIgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAxMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChob3VyID4gMTIpIHtcbiAgICAgICAgICAgIHJldHVybiBob3VyIC0gMTI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhvdXI7XG4gICAgfVxuXG4gICAgLy8gZmlyc3RXZWVrZGF5OiAnc3VuZGF5JyBvciAnbW9uZGF5JywgZGVmYXVsdCBpcyAnc3VuZGF5J1xuICAgIC8vXG4gICAgLy8gUGlsZmVyZWQgJiBwb3J0ZWQgZnJvbSBSdWJ5J3Mgc3RyZnRpbWUgaW1wbGVtZW50YXRpb24uXG4gICAgZnVuY3Rpb24gd2Vla051bWJlcihkYXRlLCBmaXJzdFdlZWtkYXkpIHtcbiAgICAgICAgZmlyc3RXZWVrZGF5ID0gZmlyc3RXZWVrZGF5IHx8ICdzdW5kYXknO1xuXG4gICAgICAgIC8vIFRoaXMgd29ya3MgYnkgc2hpZnRpbmcgdGhlIHdlZWtkYXkgYmFjayBieSBvbmUgZGF5IGlmIHdlXG4gICAgICAgIC8vIGFyZSB0cmVhdGluZyBNb25kYXkgYXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgdmFyIHdlZWtkYXkgPSBkYXRlLmdldERheSgpO1xuICAgICAgICBpZiAoZmlyc3RXZWVrZGF5ID09PSAnbW9uZGF5Jykge1xuICAgICAgICAgICAgaWYgKHdlZWtkYXkgPT09IDApIC8vIFN1bmRheVxuICAgICAgICAgICAgICAgIHdlZWtkYXkgPSA2O1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHdlZWtkYXktLTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmaXJzdERheU9mWWVhclV0YyA9IERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgMCwgMSksXG4gICAgICAgICAgICBkYXRlVXRjID0gRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpKSxcbiAgICAgICAgICAgIHlkYXkgPSBNYXRoLmZsb29yKChkYXRlVXRjIC0gZmlyc3REYXlPZlllYXJVdGMpIC8gODY0MDAwMDApLFxuICAgICAgICAgICAgd2Vla051bSA9ICh5ZGF5ICsgNyAtIHdlZWtkYXkpIC8gNztcblxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih3ZWVrTnVtKTtcbiAgICB9XG5cbiAgICAvLyBHZXQgdGhlIG9yZGluYWwgc3VmZml4IGZvciBhIG51bWJlcjogc3QsIG5kLCByZCwgb3IgdGhcbiAgICBmdW5jdGlvbiBvcmRpbmFsKG51bWJlcikge1xuICAgICAgICB2YXIgaSA9IG51bWJlciAlIDEwO1xuICAgICAgICB2YXIgaWkgPSBudW1iZXIgJSAxMDA7XG5cbiAgICAgICAgaWYgKChpaSA+PSAxMSAmJiBpaSA8PSAxMykgfHwgaSA9PT0gMCB8fCBpID49IDQpIHtcbiAgICAgICAgICAgIHJldHVybiAndGgnO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gJ3N0JztcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuICduZCc7XG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiAncmQnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VGltZXN0YW1wVG9VdGNPZmZzZXRGb3IoZGF0ZSkge1xuICAgICAgICByZXR1cm4gKGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSB8fCAwKSAqIDYwMDAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdhcm4obWVzc2FnZSkge1xuICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLndhcm4gPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpXG4gICAgICAgIH1cbiAgICB9XG5cbn0oKSk7XG4iLCIkKGZ1bmN0aW9uKCkge1xuICB2YXIgc3RyZnRpbWUgPSByZXF1aXJlKCdzdHJmdGltZScpO1xuXG4gIHZhciAkdGltZSA9ICQoJy50aW1lJyk7XG4gIHZhciAkYnV0dG9uID0gJCgnLmJ1dHRvbicpO1xuXG4gIHZhciB1dGMgPSBmYWxzZTtcblxuICB2YXIgdXBkYXRlQ2xvY2tUaW1lID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9mZnNldCA9IHV0YyA/IDQgOiAwO1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgb2Zmc2V0ICogMzYwMCAqIDEwMDApXG5cbiAgICAkdGltZS5maW5kKCcuaG91cnMnKS50ZXh0KHN0cmZ0aW1lKCclbCcsIGRhdGUpKTtcbiAgICAkdGltZS5maW5kKCcubWludXRlcycpLnRleHQoc3RyZnRpbWUoJyVNJywgZGF0ZSkpO1xuICAgICR0aW1lLmZpbmQoJy5zZWNvbmRzJykudGV4dChzdHJmdGltZSgnJVMnLCBkYXRlKSk7XG4gICAgJHRpbWUuZmluZCgnLmFtcG0nKS50ZXh0KHN0cmZ0aW1lKCclcCcsIGRhdGUpKTtcbiAgfTtcblxuICB2YXIgY2hhbmdlVGltZVpvbmUgPSBmdW5jdGlvbigpIHtcbiAgICB1dGMgPSAhdXRjO1xuICAgICRidXR0b24udG9nZ2xlQ2xhc3MoJ3ByZXNzZWQnKTtcbiAgfTtcblxuICAkYnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjaGFuZ2VUaW1lWm9uZSgpO1xuICB9KTtcblxuICBzZXRJbnRlcnZhbCh1cGRhdGVDbG9ja1RpbWUsIDEwMDApO1xufSk7XG4iLCIkKGZ1bmN0aW9uKCkge1xuXG59KTtcbiJdfQ==
