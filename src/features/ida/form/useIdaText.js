import { useCallback } from "react";
import { useSelector } from "react-redux";
import { selectLang } from "../../app/appSlice";

// t(key, fallback, vars) — looks `key` up in the active language file
// (src/lang/*.json), falling back to the English text, and fills in any
// {placeholder} from `vars`.
export default function useIdaText() {
    const text = useSelector(selectLang);
    return useCallback(
        (key, fallback, vars) => {
            const template = text?.[key] || fallback || "";
            if (!vars) return template;
            return template.replace(/\{(\w+)\}/g, (match, name) => (name in vars ? String(vars[name]) : match));
        },
        [text]
    );
}
