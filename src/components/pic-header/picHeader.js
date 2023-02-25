export const picHeader = (img, title = '') => {
        const headerUrl = {
            background: `url(../img/${img})`
        }
        const headerTitle = title !=='' ? <div className="header__logo_text">{title}</div> : null;
    return {headerUrl, headerTitle}
}
