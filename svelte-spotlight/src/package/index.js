export const scrollIntoViewIfNeeded = (target, container) => {
    const top = target.offsetTop - container.offsetTop;
    if (top + target.offsetTop / 2 > container.scrollTop + container.clientHeight ||
        top < container.scrollTop)
        target.scrollIntoView({ block: 'center', inline: 'center' });
};
export const isCombo = (e, combo) => {
    if (typeof combo === 'boolean') {
        return;
    }
    else {
        return combo?.key === e.key && ((combo?.metaKey && e.metaKey) || (combo?.ctrlKey && e.ctrlKey));
    }
};
