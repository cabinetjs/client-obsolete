import { MinimalAttachmentFragment } from "@queries";

export function getThumbnailUrl(attachment: MinimalAttachmentFragment, width: number, height: number) {
    return `http://localhost:4000/thumbnails/${attachment.uid}/${width}/${height}`;
}
