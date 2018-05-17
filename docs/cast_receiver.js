console.log("cast_receiver is loaded")
const context = cast.framework.CastReceiverContext.getInstance();
const playerManager = context.getPlayerManager();

// Customize the license url for playback
playbackConfig.licenseUrl = 'https://uwo-api.singtelhawk.quickplay.com';
playbackConfig.licenseRequestHandler = requestInfo => {
  requestInfo.withCredentials = true;
};
context.start({playbackConfig: playbackConfig});

// Update playback config licenseUrl according to provided value in load request.
context.getPlayerManager().setMediaPlaybackInfoHandler((loadRequest, playbackConfig) => {
  if (loadRequest.media.customData && loadRequest.media.customData.licenseUrl) {
    playbackConfig.licenseUrl = loadRequest.media.customData.licenseUrl;
  }
  return playbackConfig;
});