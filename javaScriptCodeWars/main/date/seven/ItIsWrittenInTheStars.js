/**
 * Kata url - https://www.codewars.com/kata/it-is-written-in-the-stars
 *
 * Description:
 * Task:
 * Your job for today is to finish the starSign function by finding the astrological
 * sign, given the birth details as a Date object.
 * Start and end dates for zodiac signs vary on different resources so we will
 * use this table to get consistent results:
 *
 * Aquarius ------ 21 January - 19 February
 * Pisces --------- 20 February - 20 March
 * Aries ---------- 21 March - 20 April
 * Taurus -------- 21 April - 21 May
 * Gemini -------- 22 May - 21 June
 * Cancer -------- 22 June - 22 July
 * Leo ------------- 23 July - 23 August
 * Virgo ----------- 24 August - 23 September
 * Libra ----------- 24 September - 23 October
 * Scorpio -------- 24 October - 22 November
 * Sagittarius ---- 23 November - 21 December
 * Capricorn ----- 22 December - 20 January
 *
 */

function starSign(date) {
    const Aquarius = zodiak('Aquarius', 21, 0, 19, 1);
    const Pisces = zodiak('Pisces', 20, 1, 20, 2);
    const Aries = zodiak('Aries', 21, 2, 20, 3);
    const Taurus = zodiak('Taurus', 21, 3, 21, 4);
    const Gemini = zodiak('Gemini', 22, 4, 21, 5);
    const Cancer = zodiak('Cancer', 22, 5, 22, 6);
    const Leo = zodiak('Leo', 23, 6, 23, 7);
    const Virgo = zodiak('Virgo', 24, 7, 23, 8);
    const Libra = zodiak('Libra', 24, 8, 23, 9);
    const Scorpio = zodiak('Scorpio', 24, 9, 22, 10);
    const Sagittarius = zodiak('Sagittarius', 23, 10, 21, 11);
    const Capricorn = zodiak('Capricorn', 22, 11, 20, 0);
    const zodiakYear = [Aquarius, Pisces, Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn];

    return zodiakYear.find(zodiakSign => zodiakSign.isOfSign(date)).name;
}

function zodiak(name, startDay, startMonth, endDay, endMonth) {
    return {
        'name': name,
        'startDay': startDay,
        'startMonth': startMonth,
        'endDay': endDay,
        'endMonth': endMonth,
        isOfSign: function (checkedDate) {
            if (checkedDate.getMonth() === this.startMonth || checkedDate.getMonth() === this.endMonth) {
                if (checkedDate.getMonth() === this.startMonth) {
                    return ((checkedDate.getDate() >= this.startDay) && (checkedDate.getDate() <= 31));
                } else {
                    return ((checkedDate.getDate() <= this.endDay) && (checkedDate.getDate() >= 1));
                }
            } else {
                return false;
            }
        }
    }
}

// one of solutions
// function starSign(date) {
//   var day = date.getDate();
//
//   switch(date.getMonth()){
//     case 0:  return day < 21 ? "Capricorn" : "Aquarius";
//     case 1:  return day < 20 ? "Aquarius" : "Pisces";
//     case 2:  return day < 21 ? "Pisces" : "Aries";
//     case 3:  return day < 21 ? "Aries" : "Taurus";
//     case 4:  return day < 22 ? "Taurus" : "Gemini";
//     case 5:  return day < 22 ? "Gemini" : "Cancer";
//     case 6:  return day < 23 ? "Cancer" : "Leo";
//     case 7:  return day < 24 ? "Leo" : "Virgo";
//     case 8:  return day < 24 ? "Virgo" : "Libra";
//     case 9:  return day < 24 ? "Libra" : "Scorpio";
//     case 10: return day < 23 ? "Scorpio" : "Sagittarius";
//     case 11: return day < 22 ? "Sagittarius" : "Capricorn";
//   }
// }

module.exports = {starSign};
