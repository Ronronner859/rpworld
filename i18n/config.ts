import en from "~/assets/lang/en_us.json";
import de from "~/assets/lang/de_ge.json";
import fr from "~/assets/lang/fr_fr.json";
import es from "~/assets/lang/es_sp.json";
import it from "~/assets/lang/it_it.json";
export default defineI18nConfig(() => ({
    legacy: false,  // 是否兼容之前
    fallbackLocale: 'en',  // 区配不到的语言就用en
    messages: {
        en,
        de,
        fr,
        es,
        it
    }
}))
