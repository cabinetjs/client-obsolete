import { MinimalAttachmentFragment } from "@queries";
import { Nullable } from "@utils/types";

export function getThumbnailUrl(attachment: Nullable<MinimalAttachmentFragment>, width: number, height: number) {
    if (!attachment) {
        return null;
    }

    return `http://localhost:4000/thumbnails/${attachment.uid}/${width}/${height}`;
}
