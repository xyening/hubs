import React from "react";
import { RoomLayout } from "../layout/RoomLayout";
import { InvitePopoverButton } from "./InvitePopover";

export default {
  title: "Room/InvitePopover",
  parameters: {
    layout: "fullscreen"
  }
};

const room = {
  url: "www.wan9.xyz/oggNnrN",
  code: "478816",
  embed:
    '<iframe src="https://hubs.mozilla.com/oggNnrN/handsome-famous-park?embed_token=5555555555555555555555555" style="width: 1024px; height: 768px;" allow="microphone; camera; vr; speaker;"></iframe>'
};

export const Base = () => (
  <RoomLayout
    toolbarCenter={
      <InvitePopoverButton
        shortUrl="https://www.wan9.xyz"
        url={room.url}
        code={room.code}
        embed={room.embed}
        initiallyVisible
      />
    }
  />
);

export const InviteLink = () => (
  <RoomLayout
    toolbarCenter={
      <InvitePopoverButton inviteRequired initiallyVisible inviteUrl="https://www.wan9.xyz/123?hub_invite_id=123" />
    }
  />
);
