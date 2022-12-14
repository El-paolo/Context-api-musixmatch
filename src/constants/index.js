const cors_anywhere = "https://cors-anywhere.herokuapp.com/";
const base_url = "https://api.musixmatch.com/ws/1.1/";
const charts_tracks_get = "chart.tracks.get?chart_name=top&page=1&page_size=5&f_has_lyrics=1";
const track_search = "track.search?q_track=";
const track_get = "track.get?commontrack_id=";
const api_key ="&apikey=cbf313d8ea89ca1c6936f81fe3f8227c";
const tracks_lyrics_get="track.lyrics.get?commontrack_id=";
const track_search_params="&page=1&page_size=10&f_has_lyrics=1&s_track_rating=desc";

export const chartTracksGet = () => `${ cors_anywhere }${ base_url }${ charts_tracks_get }${ api_key }`;
export const trackSearch = q_track => `${ cors_anywhere }${ base_url }${ track_search }${ q_track }${ track_search_params }${ api_key }`;
export const trackLyricsGet = commontrack_id => `${ cors_anywhere }${base_url}${ tracks_lyrics_get }${ commontrack_id }${ api_key }`;
export const trackGet = commontrack_id => `${ cors_anywhere }${ base_url }${ track_get }${ commontrack_id }${ api_key }`;


