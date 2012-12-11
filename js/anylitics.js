$(function() {
  // Track nav links
  mixpanel.track_links(".navbar", "Click nav link", {'referrer': document.referrer });
  // Track download button
  mixpanel.track_links(".btn-download", "Click download button", {'referrer': document.referrer });
});