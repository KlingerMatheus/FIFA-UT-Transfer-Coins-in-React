const numberWithCommasRounded = (value: number) => {
    return Number(Math.round(value)).toLocaleString("EN");
}

export { numberWithCommasRounded }