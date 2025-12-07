export const formatDate = (lang) => {
    const now = new Date();

    return new Intl.DateTimeFormat(lang === "bn" ? "bn" : lang, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(now);
};