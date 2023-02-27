import { Box, Stack } from "@mui/system";
import { VideoCard, ChannelCard} from "./";

const Videos = ({ videos }) => {
  console.log(videos);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos && videos.map((item,index) => (
        <Box key={index}>
          {item.id.channelId && <ChannelCard channelDetail={item} bd="solid"/>}
          {item.id.videoId && <VideoCard video={item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos