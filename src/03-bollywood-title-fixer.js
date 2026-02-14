/**
 * 🎬 Bollywood Movie Title Fixer
 *
 * Pappu ne ek movie database banaya hai lekin usne saare titles galat type
 * kar diye - kuch ALL CAPS mein, kuch all lowercase mein, kuch mein extra
 * spaces hain. Tu fix kar de titles ko proper Title Case mein!
 *
 * Rules:
 *   - Extra spaces hatao: leading, trailing, aur beech ke multiple spaces ko
 *     single space banao
 *   - Har word ka pehla letter uppercase, baaki lowercase (Title Case)
 *   - EXCEPTION: Chhote words jo Title Case mein lowercase rehte hain:
 *     "ka", "ki", "ke", "se", "aur", "ya", "the", "of", "in", "a", "an"
 *     LEKIN agar word title ka PEHLA word hai toh capitalize karo
 *   - Hint: Use trim(), split(), map(), join(), charAt(), toUpperCase(),
 *     toLowerCase(), slice()
 *
 * Validation:
 *   - Agar input string nahi hai, return ""
 *   - Agar string trim karne ke baad empty hai, return ""
 *
 * @param {string} title - Messy Bollywood movie title
 * @returns {string} Cleaned up Title Case title
 *
 * @example
 *   fixBollywoodTitle("  DILWALE   DULHANIA   LE   JAYENGE  ")
 *   // => "Dilwale Dulhania Le Jayenge"
 *
 *   fixBollywoodTitle("dil ka kya kare")
 *   // => "Dil ka Kya Kare"
 */
export function fixBollywoodTitle(title) {

  //check karo ki input string hai ya nahi
  if (typeof title !== "string") {
    return "";
  }

  //starting, ending aur beech ke extra spaces hatao
  let clean = title.trim().replace(/\s+/g, " ");

  // agar trim ke baad string empty ho
  if (clean === "") {
    return "";
  }

  //chhote words ki list jo lowercase rahenge (except first word)
  const smallWords = ["ka", "ki", "ke", "se", "aur", "ya", "the", "of", "in", "a", "an"];

  //words ko array mein convert karo
  const words = clean.split(" ");

  //har word ko Title Case mein convert karo
  const result = words.map((word, index) => {
    let lower = word.toLowerCase();

    // agar first word hai ya smallWords list mein nahi hai to capitalize karo
    if (index === 0 || !smallWords.includes(lower)) {
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    // warna lowercase hi rehne do
    else {
      return lower;
    }
  });

  // array ko dobara string mein convert karo
  return result.join(" ");
}

