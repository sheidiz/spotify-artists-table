import { toPng } from 'html-to-image';

export const htmlToImageConvert = (element) => {
    toPng(element, { cacheBust: false })
        .then((dataUrl) => {
            const link = document.createElement("a");
            link.download = "tunecards-artists-table.png";
            link.href = dataUrl;
            link.click();
        })
        .catch((err) => {
            console.log(err);
        });
};