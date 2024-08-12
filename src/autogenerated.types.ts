import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios';

declare namespace Components {
    namespace Parameters {
        export type Continuing = boolean;
        export type Kids = boolean;
        export type Limit = number;
        export type Page = number;
        export type Preliminary = boolean;
        export type Sfw = boolean;
        export type Spoilers = boolean;
        export type Unapproved = boolean;
    }
    export interface QueryParameters {
        continuing?: Parameters.Continuing;
        kids?: Parameters.Kids;
        limit?: Parameters.Limit;
        page?: Parameters.Page;
        preliminary?: Parameters.Preliminary;
        sfw?: Parameters.Sfw;
        spoilers?: Parameters.Spoilers;
        unapproved?: Parameters.Unapproved;
    }
    namespace Responses {
        export interface $400 {
        }
    }
    namespace Schemas {
        /**
         * Anime Resource
         */
        export interface Anime {
            /**
             * MyAnimeList ID
             */
            mal_id?: number;
            /**
             * MyAnimeList URL
             */
            url?: string;
            images?: AnimeImages;
            trailer?: /* Youtube Details */ TrailerBase;
            /**
             * Whether the entry is pending approval on MAL or not
             */
            approved?: boolean;
            /**
             * All titles
             */
            titles?: Title[];
            /**
             * Title
             */
            title?: string;
            /**
             * English Title
             */
            title_english?: string | null;
            /**
             * Japanese Title
             */
            title_japanese?: string | null;
            /**
             * Other Titles
             */
            title_synonyms?: string[];
            /**
             * Anime Type
             */
            type?: "TV" | "OVA" | "Movie" | "Special" | "ONA" | "Music";
            /**
             * Original Material/Source adapted from
             */
            source?: string | null;
            /**
             * Episode count
             */
            episodes?: number | null;
            /**
             * Airing status
             */
            status?: "Finished Airing" | "Currently Airing" | "Not yet aired";
            /**
             * Airing boolean
             */
            airing?: boolean;
            aired?: /* Date range */ Daterange;
            /**
             * Parsed raw duration
             */
            duration?: string | null;
            /**
             * Anime audience rating
             */
            rating?: "G - All Ages" | "PG - Children" | "PG-13 - Teens 13 or older" | "R - 17+ (violence & profanity)" | "R+ - Mild Nudity" | "Rx - Hentai";
            /**
             * Score
             */
            score?: number | null; // float
            /**
             * Number of users
             */
            scored_by?: number | null;
            /**
             * Ranking
             */
            rank?: number | null;
            /**
             * Popularity
             */
            popularity?: number | null;
            /**
             * Number of users who have added this entry to their list
             */
            members?: number | null;
            /**
             * Number of users who have favorited this entry
             */
            favorites?: number | null;
            /**
             * Synopsis
             */
            synopsis?: string | null;
            /**
             * Background
             */
            background?: string | null;
            /**
             * Season
             */
            season?: "summer" | "winter" | "spring" | "fall";
            /**
             * Year
             */
            year?: number | null;
            broadcast?: /* Broadcast Details */ Broadcast;
            producers?: /* Parsed URL Data */ MalUrl[];
            licensors?: /* Parsed URL Data */ MalUrl[];
            studios?: /* Parsed URL Data */ MalUrl[];
            genres?: /* Parsed URL Data */ MalUrl[];
            explicit_genres?: /* Parsed URL Data */ MalUrl[];
            themes?: /* Parsed URL Data */ MalUrl[];
            demographics?: /* Parsed URL Data */ MalUrl[];
        }
        /**
         * Anime Characters Resource
         */
        export interface AnimeCharacters {
            data?: {
                /**
                 * Character details
                 */
                character?: {
                    /**
                     * MyAnimeList ID
                     */
                    mal_id?: number;
                    /**
                     * MyAnimeList URL
                     */
                    url?: string;
                    images?: CharacterImages;
                    /**
                     * Character Name
                     */
                    name?: string;
                };
                /**
                 * Character's Role
                 */
                role?: string;
                voice_actors?: {
                    person?: {
                        mal_id?: number;
                        url?: string;
                        images?: PeopleImages;
                        name?: string;
                    };
                    language?: string;
                }[];
            }[];
        }
        /**
         * Anime Episode Resource
         */
        export interface AnimeEpisode {
            /**
             * MyAnimeList ID
             */
            mal_id?: number;
            /**
             * MyAnimeList URL
             */
            url?: string;
            /**
             * Title
             */
            title?: string;
            /**
             * Title Japanese
             */
            title_japanese?: string | null;
            /**
             * title_romanji
             */
            title_romanji?: string | null;
            /**
             * Episode duration in seconds
             */
            duration?: number | null;
            /**
             * Aired Date ISO8601
             */
            aired?: string | null;
            /**
             * Filler episode
             */
            filler?: boolean;
            /**
             * Recap episode
             */
            recap?: boolean;
            /**
             * Episode Synopsis
             */
            synopsis?: string | null;
        }
        /**
         * Anime Episodes Resource
         */
        export interface AnimeEpisodes {
            data?: {
                /**
                 * MyAnimeList ID
                 */
                mal_id?: number;
                /**
                 * MyAnimeList URL. This is the URL of the episode's video. If there is no video url, this will be null.
                 */
                url?: string | null;
                /**
                 * Title
                 */
                title?: string;
                /**
                 * Title Japanese
                 */
                title_japanese?: string | null;
                /**
                 * title_romanji
                 */
                title_romanji?: string | null;
                /**
                 * Episode duration in seconds
                 */
                duration?: number | null;
                /**
                 * Aired Date ISO8601
                 */
                aired?: string | null;
                /**
                 * Filler episode
                 */
                filler?: boolean;
                /**
                 * Recap episode
                 */
                recap?: boolean;
                /**
                 * Episode discussion forum URL
                 */
                forum_url?: string | null;
            }[];
            pagination?: {
                last_visible_page?: number;
                has_next_page?: boolean;
            };
        }
        /**
         * Full anime Resource
         */
        export interface AnimeFull {
            /**
             * MyAnimeList ID
             */
            mal_id?: number;
            /**
             * MyAnimeList URL
             */
            url?: string;
            images?: AnimeImages;
            trailer?: /* Youtube Details */ TrailerBase;
            /**
             * Whether the entry is pending approval on MAL or not
             */
            approved?: boolean;
            /**
             * All titles
             */
            titles?: Title[];
            /**
             * Title
             */
            title?: string;
            /**
             * English Title
             */
            title_english?: string | null;
            /**
             * Japanese Title
             */
            title_japanese?: string | null;
            /**
             * Other Titles
             */
            title_synonyms?: string[];
            /**
             * Anime Type
             */
            type?: "TV" | "OVA" | "Movie" | "Special" | "ONA" | "Music";
            /**
             * Original Material/Source adapted from
             */
            source?: string | null;
            /**
             * Episode count
             */
            episodes?: number | null;
            /**
             * Airing status
             */
            status?: "Finished Airing" | "Currently Airing" | "Not yet aired";
            /**
             * Airing boolean
             */
            airing?: boolean;
            aired?: /* Date range */ Daterange;
            /**
             * Parsed raw duration
             */
            duration?: string | null;
            /**
             * Anime audience rating
             */
            rating?: "G - All Ages" | "PG - Children" | "PG-13 - Teens 13 or older" | "R - 17+ (violence & profanity)" | "R+ - Mild Nudity" | "Rx - Hentai";
            /**
             * Score
             */
            score?: number | null; // float
            /**
             * Number of users
             */
            scored_by?: number | null;
            /**
             * Ranking
             */
            rank?: number | null;
            /**
             * Popularity
             */
            popularity?: number | null;
            /**
             * Number of users who have added this entry to their list
             */
            members?: number | null;
            /**
             * Number of users who have favorited this entry
             */
            favorites?: number | null;
            /**
             * Synopsis
             */
            synopsis?: string | null;
            /**
             * Background
             */
            background?: string | null;
            /**
             * Season
             */
            season?: "summer" | "winter" | "spring" | "fall";
            /**
             * Year
             */
            year?: number | null;
            broadcast?: /* Broadcast Details */ Broadcast;
            producers?: /* Parsed URL Data */ MalUrl[];
            licensors?: /* Parsed URL Data */ MalUrl[];
            studios?: /* Parsed URL Data */ MalUrl[];
            genres?: /* Parsed URL Data */ MalUrl[];
            explicit_genres?: /* Parsed URL Data */ MalUrl[];
            themes?: /* Parsed URL Data */ MalUrl[];
            demographics?: /* Parsed URL Data */ MalUrl[];
            relations?: {
                /**
                 * Relation type
                 */
                relation?: string;
                entry?: /* Parsed URL Data */ MalUrl[];
            }[];
            theme?: {
                openings?: string[];
                endings?: string[];
            };
            external?: {
                name?: string;
                url?: string;
            }[];
            streaming?: {
                name?: string;
                url?: string;
            }[];
        }
        export interface AnimeImages {
            /**
             * Available images in JPG
             */
            jpg?: {
                /**
                 * Image URL JPG
                 */
                image_url?: string | null;
                /**
                 * Small Image URL JPG
                 */
                small_image_url?: string | null;
                /**
                 * Image URL JPG
                 */
                large_image_url?: string | null;
            };
            /**
             * Available images in WEBP
             */
            webp?: {
                /**
                 * Image URL WEBP
                 */
                image_url?: string | null;
                /**
                 * Small Image URL WEBP
                 */
                small_image_url?: string | null;
                /**
                 * Image URL WEBP
                 */
                large_image_url?: string | null;
            };
        }
        export interface AnimeMeta {
            /**
             * MyAnimeList ID
             */
            mal_id?: number;
            /**
             * MyAnimeList URL
             */
            url?: string;
            images?: AnimeImages;
            /**
             * Entry title
             */
            title?: string;
        }
        /**
         * Anime News Resource
         */
        export interface AnimeNews {
            pagination?: {
                last_visible_page?: number;
                has_next_page?: boolean;
            };
            data?: {
                /**
                 * MyAnimeList ID
                 */
                mal_id?: number;
                /**
                 * MyAnimeList URL
                 */
                url?: string;
                /**
                 * Title
                 */
                title?: string;
                /**
                 * Post Date ISO8601
                 */
                date?: string;
                /**
                 * Author MyAnimeList Username
                 */
                author_username?: string;
                /**
                 * Author Profile URL
                 */
                author_url?: string;
                /**
                 * Forum topic URL
                 */
                forum_url?: string;
                images?: CommonImages;
                /**
                 * Comment count
                 */
                comments?: number;
                /**
                 * Excerpt
                 */
                excerpt?: string;
            }[];
        }
        /**
         * Anime Relations
         */
        export interface AnimeRelations {
            data?: {
                /**
                 * Relation type
                 */
                relation?: string;
                entry?: /* Parsed URL Data */ MalUrl[];
            }[];
        }
        export interface AnimeReview {
            /**
             * MyAnimeList ID
             */
            mal_id?: number;
            /**
             * MyAnimeList review URL
             */
            url?: string;
            /**
             * Entry type
             */
            type?: string;
            /**
             * User reaction count on the review
             */
            reactions?: {
                /**
                 * Overall reaction count
                 */
                overall?: number;
                /**
                 * Nice reaction count
                 */
                nice?: number;
                /**
                 * Love it reaction count
                 */
                love_it?: number;
                /**
                 * Funny reaction count
                 */
                funny?: number;
                /**
                 * Confusing reaction count
                 */
                confusing?: number;
                /**
                 * Informative reaction count
                 */
                informative?: number;
                /**
                 * Well written reaction count
                 */
                well_written?: number;
                /**
                 * Creative reaction count
                 */
                creative?: number;
            };
            /**
             * Review created date ISO8601
             */
            date?: string;
            /**
             * Review content
             */
            review?: string;
            /**
             * Number of user votes on the Review
             */
            score?: number;
            /**
             * Review tags
             */
            tags?: string[];
            /**
             * The review contains spoiler
             */
            is_spoiler?: boolean;
            /**
             * The review was made before the entry was completed
             */
            is_preliminary?: boolean;
            /**
             * Number of episodes watched
             */
            episodes_watched?: number;
        }
        /**
         * Anime Reviews Resource
         */
        export interface AnimeReviews {
            data?: {
                user?: UserMeta;
                /**
                 * MyAnimeList ID
                 */
                mal_id?: number;
                /**
                 * MyAnimeList review URL
                 */
                url?: string;
                /**
                 * Entry type
                 */
                type?: string;
                /**
                 * User reaction count on the review
                 */
                reactions?: {
                    /**
                     * Overall reaction count
                     */
                    overall?: number;
                    /**
                     * Nice reaction count
                     */
                    nice?: number;
                    /**
                     * Love it reaction count
                     */
                    love_it?: number;
                    /**
                     * Funny reaction count
                     */
                    funny?: number;
                    /**
                     * Confusing reaction count
                     */
                    confusing?: number;
                    /**
                     * Informative reaction count
                     */
                    informative?: number;
                    /**
                     * Well written reaction count
                     */
                    well_written?: number;
                    /**
                     * Creative reaction count
                     */
                    creative?: number;
                };
                /**
                 * Review created date ISO8601
                 */
                date?: string;
                /**
                 * Review content
                 */
                review?: string;
                /**
                 * Number of user votes on the Review
                 */
                score?: number;
                /**
                 * Review tags
                 */
                tags?: string[];
                /**
                 * The review contains spoiler
                 */
                is_spoiler?: boolean;
                /**
                 * The review was made before the entry was completed
                 */
                is_preliminary?: boolean;
                /**
                 * Number of episodes watched
                 */
                episodes_watched?: number;
            }[];
            pagination?: {
                last_visible_page?: number;
                has_next_page?: boolean;
            };
        }
        /**
         * Anime Collection Resource
         */
        export interface AnimeSearch {
            data?: /* Anime Resource */ Anime[];
            pagination?: {
                last_visible_page?: number;
                has_next_page?: boolean;
                items?: {
                    count?: number;
                    total?: number;
                    per_page?: number;
                };
            };
        }
        /**
         * Available Anime order_by properties
         */
        export type AnimeSearchQueryOrderby = "mal_id" | "title" | "start_date" | "end_date" | "episodes" | "score" | "scored_by" | "rank" | "popularity" | "members" | "favorites";
        /**
         * Available Anime audience ratings<br><br><b>Ratings</b><br><ul><li>G - All Ages</li><li>PG - Children</li><li>PG-13 - Teens 13 or older</li><li>R - 17+ (violence & profanity)</li><li>R+ - Mild Nudity</li><li>Rx - Hentai</li></ul>
         */
        export type AnimeSearchQueryRating = "g" | "pg" | "pg13" | "r17" | "r" | "rx";
        /**
         * Available Anime statuses
         */
        export type AnimeSearchQueryStatus = "airing" | "complete" | "upcoming";
        /**
         * Available Anime types
         */
        export type AnimeSearchQueryType = "tv" | "movie" | "ova" | "special" | "ona" | "music" | "cm" | "pv" | "tv_special";
        /**
         * Anime Staff Resource
         */
        export interface AnimeStaff {
            data?: {
                /**
                 * Person details
                 */
                person?: {
                    /**
                     * MyAnimeList ID
                     */
                    mal_id?: number;
                    /**
                     * MyAnimeList URL
                     */
                    url?: string;
                    images?: PeopleImages;
                    /**
                     * Name
                     */
                    name?: string;
                };
                /**
                 * Staff Positions
                 */
                positions?: string[];
            }[];
        }
        /**
         * Anime Statistics Resource
         */
        export interface AnimeStatistics {
            data?: {
                /**
                 * Number of users watching the resource
                 */
                watching?: number;
                /**
                 * Number of users who have completed the resource
                 */
                completed?: number;
                /**
                 * Number of users who have put the resource on hold
                 */
                on_hold?: number;
                /**
                 * Number of users who have dropped the resource
                 */
                dropped?: number;
                /**
                 * Number of users who have planned to watch the resource
                 */
                plan_to_watch?: number;
                /**
                 * Total number of users who have the resource added to their lists
                 */
                total?: number;
                scores?: {
                    /**
                     * Scoring value
                     */
                    score?: number;
                    /**
                     * Number of votes for this score
                     */
                    votes?: number;
                    /**
                     * Percentage of votes for this score
                     */
                    percentage?: number; // float
                }[];
            };
        }
        /**
         * Anime Opening and Ending Themes
         */
        export interface AnimeThemes {
            data?: {
                openings?: string[];
                endings?: string[];
            };
        }
        /**
         * Anime User Updates Resource
         */
        export interface AnimeUserupdates {
            data?: {
                user?: UserMeta;
                /**
                 * User Score
                 */
                score?: number | null;
                /**
                 * User list status
                 */
                status?: string;
                /**
                 * Number of episodes seen
                 */
                episodes_seen?: number | null;
                /**
                 * Total number of episodes
                 */
                episodes_total?: number | null;
                /**
                 * Last updated date ISO8601
                 */
                date?: string;
            }[];
            pagination?: {
                last_visible_page?: number;
                has_next_page?: boolean;
            };
        }
        /**
         * Anime Videos Resource
         */
        export interface AnimeVideos {
            data?: {
                promo?: {
                    /**
                     * Title
                     */
                    title?: string;
                    trailer?: /* Youtube Details */ Trailer;
                }[];
                episodes?: {
                    /**
                     * MyAnimeList ID
                     */
                    mal_id?: number;
                    /**
                     * MyAnimeList URL
                     */
                    url?: string;
                    /**
                     * Title
                     */
                    title?: string;
                    /**
                     * Episode
                     */
                    episode?: string;
                    images?: CommonImages;
                }[];
                music_videos?: {
                    /**
                     * Title
                     */
                    title?: string;
                    video?: /* Youtube Details */ Trailer;
                    meta?: {
                        title?: string | null;
                        author?: string | null;
                    };
                }[];
            };
        }
        /**
         * Anime Videos Episodes Resource
         */
        export interface AnimeVideosEpisodes {
            data?: {
                /**
                 * MyAnimeList ID or Episode Number
                 */
                mal_id?: number;
                /**
                 * Episode Title
                 */
                title?: string;
                /**
                 * Episode Subtitle
                 */
                episode?: string;
                /**
                 * Episode Page URL
                 */
                url?: string;
                images?: CommonImages;
            }[];
            pagination?: {
                last_visible_page?: number;
                has_next_page?: boolean;
            };
        }
        /**
         * Broadcast Details
         */
        export interface Broadcast {
            /**
             * Day of the week
             */
            day?: string | null;
            /**
             * Time in 24 hour format
             */
            time?: string | null;
            /**
             * Timezone (Tz Database format https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
             */
            timezone?: string | null;
            /**
             * Raw parsed broadcast string
             */
            string?: string | null;
        }
        /**
         * Character Resource
         */
        export interface Character {
            /**
             * MyAnimeList ID
             */
            mal_id?: number;
            /**
             * MyAnimeList URL
             */
            url?: string;
            images?: CharacterImages;
            /**
             * Name
             */
            name?: string;
            /**
             * Name
             */
            name_kanji?: string | null;
            /**
             * Other Names
             */
            nicknames?: string[];
            /**
             * Number of users who have favorited this entry
             */
            favorites?: number;
            /**
             * Biography
             */
            about?: string | null;
        }
        /**
         * Character casted in anime
         */
        export interface CharacterAnime {
            data?: {
                /**
                 * Character's Role
                 */
                role?: string;
                anime?: AnimeMeta;
            }[];
        }
        /**
         * Character Resource
         */
        export interface CharacterFull {
            /**
             * MyAnimeList ID
             */
            mal_id?: number;
            /**
             * MyAnimeList URL
             */
            url?: string;
            images?: CharacterImages;
            /**
             * Name
             */
            name?: string;
            /**
             * Name
             */
            name_kanji?: string | null;
            /**
             * Other Names
             */
            nicknames?: string[];
            /**
             * Number of users who have favorited this entry
             */
            favorites?: number;
            /**
             * Biography
             */
            about?: string | null;
            anime?: {
                /**
                 * Character's Role
                 */
                role?: string;
                anime?: AnimeMeta;
            }[];
            manga?: {
                /**
                 * Character's Role
                 */
                role?: string;
                manga?: MangaMeta;
            }[];
            voices?: {
                /**
                 * Character's Role
                 */
                language?: string;
                person?: PersonMeta;
            }[];
        }
        export interface CharacterImages {
            /**
             * Available images in JPG
             */
            jpg?: {
                /**
                 * Image URL JPG
                 */
                image_url?: string | null;
                /**
                 * Small Image URL JPG
                 */
                small_image_url?: string | null;
            };
            /**
             * Available images in WEBP
             */
            webp?: {
                /**
                 * Image URL WEBP
                 */
                image_url?: string | null;
                /**
                 * Small Image URL WEBP
                 */
                small_image_url?: string | null;
            };
        }
        /**
         * Character casted in manga
         */
        export interface CharacterManga {
            data?: {
                /**
                 * Character's Role
                 */
                role?: string;
                manga?: MangaMeta;
            }[];
        }
        export interface CharacterMeta {
            /**
             * MyAnimeList ID
             */
            mal_id?: number;
            /**
             * MyAnimeList URL
             */
            url?: string;
            images?: CharacterImages;
            /**
             * Entry name
             */
            name?: string;
        }
        /**
         * Character Pictures
         */
        export interface CharacterPictures {
            data?: {
                /**
                 * Default JPG Image Size URL
                 */
                image_url?: string | null;
                /**
                 * Large JPG Image Size URL
                 */
                large_image_url?: string | null;
            }[];
        }
        /**
         * Character voice actors
         */
        export interface CharacterVoiceActors {
            data?: {
                /**
                 * Character's Role
                 */
                language?: string;
                person?: PersonMeta;
            }[];
        }
        /**
         * Characters Search Resource
         */
        export interface CharactersSearch {
            data?: /* Character Resource */ Character[];
            pagination?: {
                last_visible_page?: number;
                has_next_page?: boolean;
                items?: {
                    count?: number;
                    total?: number;
                    per_page?: number;
                };
            };
        }
        /**
         * Available Character order_by properties
         */
        export type CharactersSearchQueryOrderby = "mal_id" | "name" | "favorites";
        /**
         * Club Resource
         */
        export interface Club {
            /**
             * MyAnimeList ID
             */
            mal_id?: number;
            /**
             * Club name
             */
            name?: string;
            /**
             * Club URL
             */
            url?: string;
            images?: CommonImages;
            /**
             * Number of club members
             */
            members?: number;
            /**
             * Club Category
             */
            category?: "actors & artists" | "anime" | "characters" | "cities & neighborhoods" | "companies" | "conventions" | "games" | "japan" | "manga" | "music" | "others" | "schools";
            /**
             * Date Created ISO8601
             */
            created?: string;
            /**
             * Club access
             */
            access?: "public" | "private" | "secret";
        }
        /**
         * Club Member
         */
        export interface ClubMember {
            data?: {
                /**
                 * User's username
                 */
                username?: string;
                /**
                 * User URL
                 */
                url?: string;
                images?: UserImages;
            }[];
        }
        /**
         * Club Relations
         */
        export interface ClubRelations {
            data?: {
                anime?: /* Parsed URL Data */ MalUrl[];
                manga?: /* Parsed URL Data */ MalUrl[];
                characters?: /* Parsed URL Data */ MalUrl[];
            };
        }
        /**
         * Club Search Query Category
         */
        export type ClubSearchQueryCategory = "anime" | "manga" | "actors_and_artists" | "characters" | "cities_and_neighborhoods" | "companies" | "conventions" | "games" | "japan" | "music" | "other" | "schools";
        /**
         * Club Search Query OrderBy
         */
        export type ClubSearchQueryOrderby = "mal_id" | "name" | "members_count" | "created";
        /**
         * Club Search Query Type
         */
        export type ClubSearchQueryType = "public" | "private" | "secret";
        /**
         * Club Staff Resource
         */
        export interface ClubStaff {
            data?: {
                /**
                 * User URL
                 */
                url?: string;
                /**
                 * User's username
                 */
                username?: string;
            }[];
        }
        /**
         * Clubs Search Resource
         */
        export interface ClubsSearch {
            data?: /* Club Resource */ Club[];
            pagination?: {
                last_visible_page?: number;
                has_next_page?: boolean;
            };
        }
        export interface CommonImages {
            /**
             * Available images in JPG
             */
            jpg?: {
                /**
                 * Image URL JPG
                 */
                image_url?: string | null;
            };
        }
        /**
         * Date range
         */
        export interface Daterange {
            /**
             * Date ISO8601
             */
            from?: string | null;
            /**
             * Date ISO8601
             */
            to?: string | null;
            /**
             * Date Prop
             */
            prop?: {
                /**
                 * Date Prop From
                 */
                from?: {
                    /**
                     * Day
                     */
                    day?: number | null;
                    /**
                     * Month
                     */
                    month?: number | null;
                    /**
                     * Year
                     */
                    year?: number | null;
                };
                /**
                 * Date Prop To
                 */
                to?: {
                    /**
                     * Day
                     */
                    day?: number | null;
                    /**
                     * Month
                     */
                    month?: number | null;
                    /**
                     * Year
                     */
                    year?: number | null;
                };
                /**
                 * Raw parsed string
                 */
                string?: string | null;
            };
        }
        /**
         * Entry Meta data
         */
        export interface EntryMeta {
            /**
             * MyAnimeList ID
             */
            mal_id?: number;
            /**
             * MyAnimeList URL
             */
            url?: string;
            /**
             * Image URL
             */
            image_url?: string;
            /**
             * Entry Name/Title
             */
            name?: string;
        }
        /**
         * Entry Recommendations Resource
         */
        export interface EntryRecommendations {
            data?: {
                entry?: AnimeMeta | MangaMeta;
            }[];
        }
        /**
         * External links
         */
        export interface ExternalLinks {
            data?: {
                name?: string;
                url?: string;
            }[];
        }
        /**
         * Forum Resource
         */
        export interface Forum {
            data?: {
                /**
                 * MyAnimeList ID
                 */
                mal_id?: number;
                /**
                 * MyAnimeList URL
                 */
                url?: string;
                /**
                 * Title
                 */
                title?: string;
                /**
                 * Post Date ISO8601
                 */
                date?: string;
                /**
                 * Author MyAnimeList Username
                 */
                author_username?: string;
                /**
                 * Author Profile URL
                 */
                author_url?: string;
                /**
                 * Comment count
                 */
                comments?: number;
                /**
                 * Last comment details
                 */
                last_comment?: {
                    /**
                     * Last comment URL
                     */
                    url?: string;
                    /**
                     * Author MyAnimeList Username
                     */
                    author_username?: string;
                    /**
                     * Author Profile URL
                     */
                    author_url?: string;
                    /**
                     * Last comment date posted ISO8601
                     */
                    date?: string | null;
                };
            }[];
        }
        /**
         * Genre Resource
         */
        export interface Genre {
            /**
             * MyAnimeList ID
             */
            mal_id?: number;
            /**
             * Genre Name
             */
            name?: string;
            /**
             * MyAnimeList URL
             */
            url?: string;
            /**
             * Genre's entry count
             */
            count?: number;
        }
        /**
         * Filter genres by type
         */
        export type GenreQueryFilter = "genres" | "explicit_genres" | "themes" | "demographics";
        /**
         * Genres Collection Resource
         */
        export interface Genres {
            data?: /* Genre Resource */ Genre[];
        }
        /**
         * Transform the resource into an array.
         */
        export interface History {
            entry?: /* Parsed URL Data */ MalUrl;
            /**
             * Number of episodes/chapters watched/read
             */
            increment?: number;
            /**
             * Date ISO8601
             */
            date?: string;
        }
        /**
         * Magazine Resource
         */
        export interface Magazine {
            /**
             * MyAnimeList ID
             */
            mal_id?: number;
            /**
             * Magazine Name
             */
            name?: string;
            /**
             * MyAnimeList URL
             */
            url?: string;
            /**
             * Magazine's manga count
             */
            count?: number;
        }
        /**
         * Magazine Collection Resource
         */
        export interface Magazines {
            data?: /* Magazine Resource */ Magazine[];
            pagination?: {
                last_visible_page?: number;
                has_next_page?: boolean;
            };
        }
        /**
         * Order by magazine data
         */
        export type MagazinesQueryOrderby = "mal_id" | "name" | "count";
        /**
         * Parsed URL Data
         */
        export interface MalUrl {
            /**
             * MyAnimeList ID
             */
            mal_id?: number;
            /**
             * Type of resource
             */
            type?: string;
            /**
             * Resource Name/Title
             */
            name?: string;
            /**
             * MyAnimeList URL
             */
            url?: string;
        }
        /**
         * Parsed URL Data
         */
        export interface MalUrl2 {
            /**
             * MyAnimeList ID
             */
            mal_id?: number;
            /**
             * Type of resource
             */
            type?: string;
            /**
             * Resource Name/Title
             */
            title?: string;
            /**
             * MyAnimeList URL
             */
            url?: string;
        }
        /**
         * Manga Resource
         */
        export interface Manga {
            /**
             * MyAnimeList ID
             */
            mal_id?: number;
            /**
             * MyAnimeList URL
             */
            url?: string;
            images?: MangaImages;
            /**
             * Whether the entry is pending approval on MAL or not
             */
            approved?: boolean;
            /**
             * All Titles
             */
            titles?: Title[];
            /**
             * Title
             */
            title?: string;
            /**
             * English Title
             */
            title_english?: string | null;
            /**
             * Japanese Title
             */
            title_japanese?: string | null;
            /**
             * Manga Type
             */
            type?: "Manga" | "Novel" | "Light Novel" | "One-shot" | "Doujinshi" | "Manhua" | "Manhwa" | "OEL";
            /**
             * Chapter count
             */
            chapters?: number | null;
            /**
             * Volume count
             */
            volumes?: number | null;
            /**
             * Publishing status
             */
            status?: "Finished" | "Publishing" | "On Hiatus" | "Discontinued" | "Not yet published";
            /**
             * Publishing boolean
             */
            publishing?: boolean;
            published?: /* Date range */ Daterange;
            /**
             * Score
             */
            score?: number | null; // float
            /**
             * Number of users
             */
            scored_by?: number | null;
            /**
             * Ranking
             */
            rank?: number | null;
            /**
             * Popularity
             */
            popularity?: number | null;
            /**
             * Number of users who have added this entry to their list
             */
            members?: number | null;
            /**
             * Number of users who have favorited this entry
             */
            favorites?: number | null;
            /**
             * Synopsis
             */
            synopsis?: string | null;
            /**
             * Background
             */
            background?: string | null;
            authors?: /* Parsed URL Data */ MalUrl[];
            serializations?: /* Parsed URL Data */ MalUrl[];
            genres?: /* Parsed URL Data */ MalUrl[];
            explicit_genres?: /* Parsed URL Data */ MalUrl[];
            themes?: /* Parsed URL Data */ MalUrl[];
            demographics?: /* Parsed URL Data */ MalUrl[];
        }
        /**
         * Manga Characters Resource
         */
        export interface MangaCharacters {
            data?: {
                character?: CharacterMeta;
                /**
                 * Character's Role
                 */
                role?: string;
            }[];
        }
        /**
         * Manga Resource
         */
        export interface MangaFull {
            /**
             * MyAnimeList ID
             */
            mal_id?: number;
            /**
             * MyAnimeList URL
             */
            url?: string;
            images?: MangaImages;
            /**
             * Whether the entry is pending approval on MAL or not
             */
            approved?: boolean;
            /**
             * All Titles
             */
            titles?: Title[];
            /**
             * Title
             */
            title?: string;
            /**
             * English Title
             */
            title_english?: string | null;
            /**
             * Japanese Title
             */
            title_japanese?: string | null;
            /**
             * Other Titles
             */
            title_synonyms?: string[];
            /**
             * Manga Type
             */
            type?: "Manga" | "Novel" | "Light Novel" | "One-shot" | "Doujinshi" | "Manhua" | "Manhwa" | "OEL";
            /**
             * Chapter count
             */
            chapters?: number | null;
            /**
             * Volume count
             */
            volumes?: number | null;
            /**
             * Publishing status
             */
            status?: "Finished" | "Publishing" | "On Hiatus" | "Discontinued" | "Not yet published";
            /**
             * Publishing boolean
             */
            publishing?: boolean;
            published?: /* Date range */ Daterange;
            /**
             * Score
             */
            score?: number | null; // float
            /**
             * Number of users
             */
            scored_by?: number | null;
            /**
             * Ranking
             */
            rank?: number | null;
            /**
             * Popularity
             */
            popularity?: number | null;
            /**
             * Number of users who have added this entry to their list
             */
            members?: number | null;
            /**
             * Number of users who have favorited this entry
             */
            favorites?: number | null;
            /**
             * Synopsis
             */
            synopsis?: string | null;
            /**
             * Background
             */
            background?: string | null;
            authors?: /* Parsed URL Data */ MalUrl[];
            serializations?: /* Parsed URL Data */ MalUrl[];
            genres?: /* Parsed URL Data */ MalUrl[];
            explicit_genres?: /* Parsed URL Data */ MalUrl[];
            themes?: /* Parsed URL Data */ MalUrl[];
            demographics?: /* Parsed URL Data */ MalUrl[];
            relations?: {
                /**
                 * Relation type
                 */
                relation?: string;
                entry?: /* Parsed URL Data */ MalUrl[];
            }[];
            external?: {
                name?: string;
                url?: string;
            }[];
        }
        export interface MangaImages {
            /**
             * Available images in JPG
             */
            jpg?: {
                /**
                 * Image URL JPG
                 */
                image_url?: string | null;
                /**
                 * Small Image URL JPG
                 */
                small_image_url?: string | null;
                /**
                 * Image URL JPG
                 */
                large_image_url?: string | null;
            };
            /**
             * Available images in WEBP
             */
            webp?: {
                /**
                 * Image URL WEBP
                 */
                image_url?: string | null;
                /**
                 * Small Image URL WEBP
                 */
                small_image_url?: string | null;
                /**
                 * Image URL WEBP
                 */
                large_image_url?: string | null;
            };
        }
        export interface MangaMeta {
            /**
             * MyAnimeList ID
             */
            mal_id?: number;
            /**
             * MyAnimeList URL
             */
            url?: string;
            images?: MangaImages;
            /**
             * Entry title
             */
            title?: string;
        }
        /**
         * Manga News Resource
         */
        export interface MangaNews {
            pagination?: {
                last_visible_page?: number;
                has_next_page?: boolean;
            };
            data?: {
                /**
                 * MyAnimeList ID
                 */
                mal_id?: number;
                /**
                 * MyAnimeList URL
                 */
                url?: string;
                /**
                 * Title
                 */
                title?: string;
                /**
                 * Post Date ISO8601
                 */
                date?: string;
                /**
                 * Author MyAnimeList Username
                 */
                author_username?: string;
                /**
                 * Author Profile URL
                 */
                author_url?: string;
                /**
                 * Forum topic URL
                 */
                forum_url?: string;
                images?: CommonImages;
                /**
                 * Comment count
                 */
                comments?: number;
                /**
                 * Excerpt
                 */
                excerpt?: string;
            }[];
        }
        /**
         * Manga Pictures
         */
        export interface MangaPictures {
            data?: MangaImages[];
        }
        export interface MangaReview {
            /**
             * MyAnimeList ID
             */
            mal_id?: number;
            /**
             * MyAnimeList review URL
             */
            url?: string;
            /**
             * Entry type
             */
            type?: string;
            /**
             * User reaction count on the review
             */
            reactions?: {
                /**
                 * Overall reaction count
                 */
                overall?: number;
                /**
                 * Nice reaction count
                 */
                nice?: number;
                /**
                 * Love it reaction count
                 */
                love_it?: number;
                /**
                 * Funny reaction count
                 */
                funny?: number;
                /**
                 * Confusing reaction count
                 */
                confusing?: number;
                /**
                 * Informative reaction count
                 */
                informative?: number;
                /**
                 * Well written reaction count
                 */
                well_written?: number;
                /**
                 * Creative reaction count
                 */
                creative?: number;
            };
            /**
             * Review created date ISO8601
             */
            date?: string;
            /**
             * Review content
             */
            review?: string;
            /**
             * Number of user votes on the Review
             */
            score?: number;
            /**
             * Review tags
             */
            tags?: string[];
            /**
             * The review contains spoiler
             */
            is_spoiler?: boolean;
            /**
             * The review was made before the entry was completed
             */
            is_preliminary?: boolean;
        }
        /**
         * Manga Reviews Resource
         */
        export interface MangaReviews {
            data?: {
                user?: UserMeta;
                /**
                 * MyAnimeList ID
                 */
                mal_id?: number;
                /**
                 * MyAnimeList review URL
                 */
                url?: string;
                /**
                 * Entry type
                 */
                type?: string;
                /**
                 * User reaction count on the review
                 */
                reactions?: {
                    /**
                     * Overall reaction count
                     */
                    overall?: number;
                    /**
                     * Nice reaction count
                     */
                    nice?: number;
                    /**
                     * Love it reaction count
                     */
                    love_it?: number;
                    /**
                     * Funny reaction count
                     */
                    funny?: number;
                    /**
                     * Confusing reaction count
                     */
                    confusing?: number;
                    /**
                     * Informative reaction count
                     */
                    informative?: number;
                    /**
                     * Well written reaction count
                     */
                    well_written?: number;
                    /**
                     * Creative reaction count
                     */
                    creative?: number;
                };
                /**
                 * Review created date ISO8601
                 */
                date?: string;
                /**
                 * Review content
                 */
                review?: string;
                /**
                 * Number of user votes on the Review
                 */
                score?: number;
                /**
                 * Review tags
                 */
                tags?: string[];
                /**
                 * The review contains spoiler
                 */
                is_spoiler?: boolean;
                /**
                 * The review was made before the entry was completed
                 */
                is_preliminary?: boolean;
            }[];
            pagination?: {
                last_visible_page?: number;
                has_next_page?: boolean;
            };
        }
        /**
         * Manga Search Resource
         */
        export interface MangaSearch {
            data?: /* Manga Resource */ Manga[];
            pagination?: {
                last_visible_page?: number;
                has_next_page?: boolean;
                items?: {
                    count?: number;
                    total?: number;
                    per_page?: number;
                };
            };
        }
        /**
         * Available Manga order_by properties
         */
        export type MangaSearchQueryOrderby = "mal_id" | "title" | "start_date" | "end_date" | "chapters" | "volumes" | "score" | "scored_by" | "rank" | "popularity" | "members" | "favorites";
        /**
         * Available Manga statuses
         */
        export type MangaSearchQueryStatus = "publishing" | "complete" | "hiatus" | "discontinued" | "upcoming";
        /**
         * Available Manga types
         */
        export type MangaSearchQueryType = "manga" | "novel" | "lightnovel" | "oneshot" | "doujin" | "manhwa" | "manhua";
        /**
         * Manga Statistics Resource
         */
        export interface MangaStatistics {
            data?: {
                /**
                 * Number of users reading the resource
                 */
                reading?: number;
                /**
                 * Number of users who have completed the resource
                 */
                completed?: number;
                /**
                 * Number of users who have put the resource on hold
                 */
                on_hold?: number;
                /**
                 * Number of users who have dropped the resource
                 */
                dropped?: number;
                /**
                 * Number of users who have planned to read the resource
                 */
                plan_to_read?: number;
                /**
                 * Total number of users who have the resource added to their lists
                 */
                total?: number;
                scores?: {
                    /**
                     * Scoring value
                     */
                    score?: number;
                    /**
                     * Number of votes for this score
                     */
                    votes?: number;
                    /**
                     * Percentage of votes for this score
                     */
                    percentage?: number; // float
                }[];
            };
        }
        /**
         * Manga User Updates Resource
         */
        export interface MangaUserupdates {
            data?: {
                user?: UserMeta;
                /**
                 * User Score
                 */
                score?: number | null;
                /**
                 * User list status
                 */
                status?: string;
                /**
                 * Number of volumes read
                 */
                volumes_read?: number;
                /**
                 * Total number of volumes
                 */
                volumes_total?: number;
                /**
                 * Number of chapters read
                 */
                chapters_read?: number;
                /**
                 * Total number of chapters
                 */
                chapters_total?: number;
                /**
                 * Last updated date ISO8601
                 */
                date?: string;
            }[];
            pagination?: {
                last_visible_page?: number;
                has_next_page?: boolean;
            };
        }
        /**
         * More Info Resource
         */
        export interface Moreinfo {
            data?: {
                /**
                 * Additional information on the entry
                 */
                moreinfo?: string | null;
            };
        }
        export interface News {
            data?: {
                /**
                 * MyAnimeList ID
                 */
                mal_id?: number;
                /**
                 * MyAnimeList URL
                 */
                url?: string;
                /**
                 * Title
                 */
                title?: string;
                /**
                 * Post Date ISO8601
                 */
                date?: string;
                /**
                 * Author MyAnimeList Username
                 */
                author_username?: string;
                /**
                 * Author Profile URL
                 */
                author_url?: string;
                /**
                 * Forum topic URL
                 */
                forum_url?: string;
                images?: CommonImages;
                /**
                 * Comment count
                 */
                comments?: number;
                /**
                 * Excerpt
                 */
                excerpt?: string;
            }[];
        }
        export interface Pagination {
            pagination?: {
                last_visible_page?: number;
                has_next_page?: boolean;
            };
        }
        export interface PaginationPlus {
            pagination?: {
                last_visible_page?: number;
                has_next_page?: boolean;
                items?: {
                    count?: number;
                    total?: number;
                    per_page?: number;
                };
            };
        }
        export interface PeopleImages {
            /**
             * Available images in JPG
             */
            jpg?: {
                /**
                 * Image URL JPG
                 */
                image_url?: string | null;
            };
        }
        /**
         * People Search
         */
        export interface PeopleSearch {
            data?: {
                /**
                 * MyAnimeList ID
                 */
                mal_id?: number;
                /**
                 * MyAnimeList URL
                 */
                url?: string;
                /**
                 * Person's website URL
                 */
                website_url?: string | null;
                images?: PeopleImages;
                /**
                 * Name
                 */
                name?: string;
                /**
                 * Given Name
                 */
                given_name?: string | null;
                /**
                 * Family Name
                 */
                family_name?: string | null;
                /**
                 * Other Names
                 */
                alternate_names?: string[];
                /**
                 * Birthday Date ISO8601
                 */
                birthday?: string | null;
                /**
                 * Number of users who have favorited this entry
                 */
                favorites?: number;
                /**
                 * Biography
                 */
                about?: string | null;
            }[];
            pagination?: {
                last_visible_page?: number;
                has_next_page?: boolean;
                items?: {
                    count?: number;
                    total?: number;
                    per_page?: number;
                };
            };
        }
        /**
         * Available People order_by properties
         */
        export type PeopleSearchQueryOrderby = "mal_id" | "name" | "birthday" | "favorites";
        /**
         * Person Resource
         */
        export interface Person {
            /**
             * MyAnimeList ID
             */
            mal_id?: number;
            /**
             * MyAnimeList URL
             */
            url?: string;
            /**
             * Person's website URL
             */
            website_url?: string | null;
            images?: PeopleImages;
            /**
             * Name
             */
            name?: string;
            /**
             * Given Name
             */
            given_name?: string | null;
            /**
             * Family Name
             */
            family_name?: string | null;
            /**
             * Other Names
             */
            alternate_names?: string[];
            /**
             * Birthday Date ISO8601
             */
            birthday?: string | null;
            /**
             * Number of users who have favorited this entry
             */
            favorites?: number;
            /**
             * Biography
             */
            about?: string | null;
        }
        /**
         * Person anime staff positions
         */
        export interface PersonAnime {
            data?: {
                /**
                 * Person's position
                 */
                position?: string;
                anime?: AnimeMeta;
            }[];
        }
        /**
         * Person Resource
         */
        export interface PersonFull {
            /**
             * MyAnimeList ID
             */
            mal_id?: number;
            /**
             * MyAnimeList URL
             */
            url?: string;
            /**
             * Person's website URL
             */
            website_url?: string | null;
            images?: PeopleImages;
            /**
             * Name
             */
            name?: string;
            /**
             * Given Name
             */
            given_name?: string | null;
            /**
             * Family Name
             */
            family_name?: string | null;
            /**
             * Other Names
             */
            alternate_names?: string[];
            /**
             * Birthday Date ISO8601
             */
            birthday?: string | null;
            /**
             * Number of users who have favorited this entry
             */
            favorites?: number;
            /**
             * Biography
             */
            about?: string | null;
            anime?: {
                /**
                 * Person's position
                 */
                position?: string;
                anime?: AnimeMeta;
            }[];
            manga?: {
                /**
                 * Person's position
                 */
                position?: string;
                manga?: MangaMeta;
            }[];
            voices?: {
                /**
                 * Person's Character's role in the anime
                 */
                role?: string;
                anime?: AnimeMeta;
                character?: CharacterMeta;
            }[];
        }
        /**
         * Person's mangaography
         */
        export interface PersonManga {
            data?: {
                /**
                 * Person's position
                 */
                position?: string;
                manga?: MangaMeta;
            }[];
        }
        export interface PersonMeta {
            /**
             * MyAnimeList ID
             */
            mal_id?: number;
            /**
             * MyAnimeList URL
             */
            url?: string;
            images?: PeopleImages;
            /**
             * Entry name
             */
            name?: string;
        }
        /**
         * Character Pictures
         */
        export interface PersonPictures {
            data?: PeopleImages[];
        }
        /**
         * Person's voice acting roles
         */
        export interface PersonVoiceActingRoles {
            data?: {
                /**
                 * Person's Character's role in the anime
                 */
                role?: string;
                anime?: AnimeMeta;
                character?: CharacterMeta;
            }[];
        }
        /**
         * Pictures Resource
         */
        export interface Pictures {
            data?: {
                images?: AnimeImages;
            }[];
        }
        /**
         * Pictures Resource
         */
        export interface PicturesVariants {
            data?: {
                images?: CommonImages;
            }[];
        }
        /**
         * Producers Resource
         */
        export interface Producer {
            /**
             * MyAnimeList ID
             */
            mal_id?: number;
            /**
             * MyAnimeList URL
             */
            url?: string;
            /**
             * All titles
             */
            titles?: Title[];
            images?: CommonImages;
            /**
             * Producers's member favorites count
             */
            favorites?: number;
            /**
             * Producers's anime count
             */
            count?: number;
            /**
             * Established Date ISO8601
             */
            established?: string | null;
            /**
             * About the Producer
             */
            about?: string | null;
        }
        /**
         * Producers Resource
         */
        export interface ProducerFull {
            /**
             * MyAnimeList ID
             */
            mal_id?: number;
            /**
             * MyAnimeList URL
             */
            url?: string;
            /**
             * All titles
             */
            titles?: Title[];
            images?: CommonImages;
            /**
             * Producers's member favorites count
             */
            favorites?: number;
            /**
             * Producers's anime count
             */
            count?: number;
            /**
             * Established Date ISO8601
             */
            established?: string | null;
            /**
             * About the Producer
             */
            about?: string | null;
            external?: {
                name?: string;
                url?: string;
            }[];
        }
        /**
         * Producers Collection Resource
         */
        export interface Producers {
            data?: /* Producers Resource */ Producer[];
            pagination?: {
                last_visible_page?: number;
                has_next_page?: boolean;
            };
        }
        /**
         * Producers Search Query Order By
         */
        export type ProducersQueryOrderby = "mal_id" | "count" | "favorites" | "established";
        /**
         * Random Resources
         */
        export interface Random {
            data?: (/* Anime Resource */ Anime | /* Manga Resource */ Manga | /* Character Resource */ Character | /* Person Resource */ Person)[];
        }
        /**
         * Recommendations
         */
        export interface Recommendations {
            data?: {
                /**
                 * MAL IDs of recommendations is both of the MAL ID's with a `-` delimiter
                 */
                mal_id?: string;
                /**
                 * Array of 2 entries that are being recommended to each other
                 */
                entry?: (AnimeMeta | MangaMeta)[];
                /**
                 * Recommendation context provided by the user
                 */
                content?: string;
                user?: /* User Meta By ID */ UserById;
            }[];
            pagination?: {
                last_visible_page?: number;
                has_next_page?: boolean;
            };
        }
        /**
         * Related resources
         */
        export interface Relation {
            /**
             * Relation type
             */
            relation?: string;
            /**
             * Related entries
             */
            entry?: /* Parsed URL Data */ MalUrl[];
        }
        /**
         * Anime & Manga Reviews Resource
         */
        export interface ReviewsCollection {
            data?: (AnimeReview | MangaReview)[];
        }
        /**
         * Anime resources currently airing
         */
        export interface Schedules {
            data?: /* Anime Resource */ Anime[];
            pagination?: {
                last_visible_page?: number;
                has_next_page?: boolean;
                items?: {
                    count?: number;
                    total?: number;
                    per_page?: number;
                };
            };
        }
        /**
         * Search query sort direction
         */
        export type SearchQuerySort = "desc" | "asc";
        /**
         * List of available seasons
         */
        export interface Seasons {
            data?: {
                /**
                 * Year
                 */
                year?: number;
                /**
                 * List of available seasons
                 */
                seasons?: string[];
            }[];
        }
        /**
         * Streaming links
         */
        export interface StreamingLinks {
            data?: {
                name?: string;
                url?: string;
            }[];
        }
        export interface Title {
            /**
             * Title type
             */
            type?: string;
            /**
             * Title value
             */
            title?: string;
        }
        /**
         * Top items filter types
         */
        export type TopAnimeFilter = "airing" | "upcoming" | "bypopularity" | "favorite";
        /**
         * Top items filter types
         */
        export type TopMangaFilter = "publishing" | "upcoming" | "bypopularity" | "favorite";
        /**
         * The type of reviews to filter by. Defaults to anime.
         */
        export type TopReviewsTypeEnum = "anime" | "manga";
        /**
         * Youtube Details
         */
        export interface Trailer {
            /**
             * YouTube ID
             */
            youtube_id?: string | null;
            /**
             * YouTube URL
             */
            url?: string | null;
            /**
             * Parsed Embed URL
             */
            embed_url?: string | null;
            images?: {
                /**
                 * Default Image Size URL (120x90)
                 */
                image_url?: string | null;
                /**
                 * Small Image Size URL (640x480)
                 */
                small_image_url?: string | null;
                /**
                 * Medium Image Size URL (320x180)
                 */
                medium_image_url?: string | null;
                /**
                 * Large Image Size URL (480x360)
                 */
                large_image_url?: string | null;
                /**
                 * Maximum Image Size URL (1280x720)
                 */
                maximum_image_url?: string | null;
            };
        }
        /**
         * Youtube Details
         */
        export interface TrailerBase {
            /**
             * YouTube ID
             */
            youtube_id?: string | null;
            /**
             * YouTube URL
             */
            url?: string | null;
            /**
             * Parsed Embed URL
             */
            embed_url?: string | null;
        }
        /**
         * Youtube Images
         */
        export interface TrailerImages {
            images?: {
                /**
                 * Default Image Size URL (120x90)
                 */
                image_url?: string | null;
                /**
                 * Small Image Size URL (640x480)
                 */
                small_image_url?: string | null;
                /**
                 * Medium Image Size URL (320x180)
                 */
                medium_image_url?: string | null;
                /**
                 * Large Image Size URL (480x360)
                 */
                large_image_url?: string | null;
                /**
                 * Maximum Image Size URL (1280x720)
                 */
                maximum_image_url?: string | null;
            };
        }
        export interface UserAbout {
            data?: {
                /**
                 * User About. NOTE: About information is customizable by users through BBCode on MyAnimeList. This means users can add multimedia content, different text sizes, etc. Due to this freeform, Jikan returns parsed HTML. Validate on your end!
                 */
                about?: string | null;
            }[];
        }
        /**
         * User's anime list status filter options
         */
        export type UserAnimeListStatusFilter = "all" | "watching" | "completed" | "onhold" | "dropped" | "plantowatch";
        /**
         * User Meta By ID
         */
        export interface UserById {
            /**
             * MyAnimeList URL
             */
            url?: string;
            /**
             * MyAnimeList Username
             */
            username?: string;
        }
        /**
         * User Clubs
         */
        export interface UserClubs {
            data?: {
                /**
                 * MyAnimeList ID
                 */
                mal_id?: number;
                /**
                 * Club Name
                 */
                name?: string;
                /**
                 * Club URL
                 */
                url?: string;
            }[];
            pagination?: {
                last_visible_page?: number;
                has_next_page?: boolean;
            };
        }
        export interface UserFavorites {
            /**
             * Favorite Anime
             */
            anime?: {
                type?: string;
                start_year?: number;
                /**
                 * MyAnimeList ID
                 */
                mal_id?: number;
                /**
                 * MyAnimeList URL
                 */
                url?: string;
                images?: AnimeImages;
                /**
                 * Entry title
                 */
                title?: string;
            }[];
            /**
             * Favorite Manga
             */
            manga?: {
                type?: string;
                start_year?: number;
                /**
                 * MyAnimeList ID
                 */
                mal_id?: number;
                /**
                 * MyAnimeList URL
                 */
                url?: string;
                images?: MangaImages;
                /**
                 * Entry title
                 */
                title?: string;
            }[];
            /**
             * Favorite Characters
             */
            characters?: {
                /**
                 * MyAnimeList ID
                 */
                mal_id?: number;
                /**
                 * MyAnimeList URL
                 */
                url?: string;
                images?: CharacterImages;
                /**
                 * Entry name
                 */
                name?: string;
                /**
                 * Type of resource
                 */
                type?: string;
                /**
                 * Resource Name/Title
                 */
                title?: string;
            }[];
            /**
             * Favorite People
             */
            people?: CharacterMeta[];
        }
        /**
         * User Friends
         */
        export interface UserFriends {
            data?: {
                user?: UserMeta;
                /**
                 * Last Online Date ISO8601 format
                 */
                last_online?: string;
                /**
                 * Friends Since Date ISO8601 format
                 */
                friends_since?: string;
            }[];
            pagination?: {
                last_visible_page?: number;
                has_next_page?: boolean;
            };
        }
        export interface UserHistory {
            data?: /* Transform the resource into an array. */ History[];
        }
        export interface UserImages {
            /**
             * Available images in JPG
             */
            jpg?: {
                /**
                 * Image URL JPG
                 */
                image_url?: string | null;
            };
            /**
             * Available images in WEBP
             */
            webp?: {
                /**
                 * Image URL WEBP
                 */
                image_url?: string | null;
            };
        }
        /**
         * User's anime list status filter options
         */
        export type UserMangaListStatusFilter = "all" | "reading" | "completed" | "onhold" | "dropped" | "plantoread";
        export interface UserMeta {
            /**
             * MyAnimeList Username
             */
            username?: string;
            /**
             * MyAnimeList Profile URL
             */
            url?: string;
            images?: UserImages;
        }
        export interface UserProfile {
            /**
             * MyAnimeList ID
             */
            mal_id?: number | null;
            /**
             * MyAnimeList Username
             */
            username?: string;
            /**
             * MyAnimeList URL
             */
            url?: string;
            images?: UserImages;
            /**
             * Last Online Date ISO8601
             */
            last_online?: string | null;
            /**
             * User Gender
             */
            gender?: string | null;
            /**
             * Birthday Date ISO8601
             */
            birthday?: string | null;
            /**
             * Location
             */
            location?: string | null;
            /**
             * Joined Date ISO8601
             */
            joined?: string | null;
        }
        /**
         * Transform the resource into an array.
         */
        export interface UserProfileFull {
            /**
             * MyAnimeList ID
             */
            mal_id?: number | null;
            /**
             * MyAnimeList Username
             */
            username?: string;
            /**
             * MyAnimeList URL
             */
            url?: string;
            images?: UserImages;
            /**
             * Last Online Date ISO8601
             */
            last_online?: string | null;
            /**
             * User Gender
             */
            gender?: string | null;
            /**
             * Birthday Date ISO8601
             */
            birthday?: string | null;
            /**
             * Location
             */
            location?: string | null;
            /**
             * Joined Date ISO8601
             */
            joined?: string | null;
            statistics?: {
                /**
                 * Anime Statistics
                 */
                anime?: {
                    /**
                     * Number of days spent watching Anime
                     */
                    days_watched?: number; // float
                    /**
                     * Mean Score
                     */
                    mean_score?: number; // float
                    /**
                     * Anime Watching
                     */
                    watching?: number;
                    /**
                     * Anime Completed
                     */
                    completed?: number;
                    /**
                     * Anime On-Hold
                     */
                    on_hold?: number;
                    /**
                     * Anime Dropped
                     */
                    dropped?: number;
                    /**
                     * Anime Planned to Watch
                     */
                    plan_to_watch?: number;
                    /**
                     * Total Anime entries on User list
                     */
                    total_entries?: number;
                    /**
                     * Anime re-watched
                     */
                    rewatched?: number;
                    /**
                     * Number of Anime Episodes Watched
                     */
                    episodes_watched?: number;
                };
                /**
                 * Manga Statistics
                 */
                manga?: {
                    /**
                     * Number of days spent reading Manga
                     */
                    days_read?: number; // float
                    /**
                     * Mean Score
                     */
                    mean_score?: number; // float
                    /**
                     * Manga Reading
                     */
                    reading?: number;
                    /**
                     * Manga Completed
                     */
                    completed?: number;
                    /**
                     * Manga On-Hold
                     */
                    on_hold?: number;
                    /**
                     * Manga Dropped
                     */
                    dropped?: number;
                    /**
                     * Manga Planned to Read
                     */
                    plan_to_read?: number;
                    /**
                     * Total Manga entries on User list
                     */
                    total_entries?: number;
                    /**
                     * Manga re-read
                     */
                    reread?: number;
                    /**
                     * Number of Manga Chapters Read
                     */
                    chapters_read?: number;
                    /**
                     * Number of Manga Volumes Read
                     */
                    volumes_read?: number;
                };
            };
            external?: {
                name?: string;
                url?: string;
            }[];
        }
        export interface UserStatistics {
            data?: {
                /**
                 * Anime Statistics
                 */
                anime?: {
                    /**
                     * Number of days spent watching Anime
                     */
                    days_watched?: number; // float
                    /**
                     * Mean Score
                     */
                    mean_score?: number; // float
                    /**
                     * Anime Watching
                     */
                    watching?: number;
                    /**
                     * Anime Completed
                     */
                    completed?: number;
                    /**
                     * Anime On-Hold
                     */
                    on_hold?: number;
                    /**
                     * Anime Dropped
                     */
                    dropped?: number;
                    /**
                     * Anime Planned to Watch
                     */
                    plan_to_watch?: number;
                    /**
                     * Total Anime entries on User list
                     */
                    total_entries?: number;
                    /**
                     * Anime re-watched
                     */
                    rewatched?: number;
                    /**
                     * Number of Anime Episodes Watched
                     */
                    episodes_watched?: number;
                };
                /**
                 * Manga Statistics
                 */
                manga?: {
                    /**
                     * Number of days spent reading Manga
                     */
                    days_read?: number; // float
                    /**
                     * Mean Score
                     */
                    mean_score?: number; // float
                    /**
                     * Manga Reading
                     */
                    reading?: number;
                    /**
                     * Manga Completed
                     */
                    completed?: number;
                    /**
                     * Manga On-Hold
                     */
                    on_hold?: number;
                    /**
                     * Manga Dropped
                     */
                    dropped?: number;
                    /**
                     * Manga Planned to Read
                     */
                    plan_to_read?: number;
                    /**
                     * Total Manga entries on User list
                     */
                    total_entries?: number;
                    /**
                     * Manga re-read
                     */
                    reread?: number;
                    /**
                     * Number of Manga Chapters Read
                     */
                    chapters_read?: number;
                    /**
                     * Number of Manga Volumes Read
                     */
                    volumes_read?: number;
                };
            };
        }
        export interface UserUpdates {
            data?: {
                /**
                 * Last updated Anime
                 */
                anime?: {
                    entry?: AnimeMeta;
                    score?: number | null;
                    status?: string;
                    episodes_seen?: number | null;
                    episodes_total?: number | null;
                    /**
                     * ISO8601 format
                     */
                    date?: string;
                }[];
                /**
                 * Last updated Manga
                 */
                manga?: {
                    entry?: MangaMeta;
                    score?: number | null;
                    status?: string;
                    chapters_read?: number | null;
                    chapters_total?: number | null;
                    volumes_read?: number | null;
                    volumes_total?: number | null;
                    /**
                     * ISO8601 format
                     */
                    date?: string;
                }[];
            };
        }
        /**
         * User Results
         */
        export interface UsersSearch {
            data?: {
                /**
                 * MyAnimeList URL
                 */
                url?: string;
                /**
                 * MyAnimeList Username
                 */
                username?: string;
                images?: UserImages;
                /**
                 * Last Online Date ISO8601
                 */
                last_online?: string;
            }[];
            pagination?: {
                last_visible_page?: number;
                has_next_page?: boolean;
            };
        }
        /**
         * Users Search Query Gender.
         */
        export type UsersSearchQueryGender = "any" | "male" | "female" | "nonbinary";
        /**
         * Transform the resource into an array.
         */
        export interface UsersTemp {
            data?: {
                /**
                 * MyAnimeList ID
                 */
                mal_id?: number;
                /**
                 * MyAnimeList Username
                 */
                username?: string;
                /**
                 * MyAnimeList URL
                 */
                url?: string;
                /**
                 * Images
                 */
                images?: {
                    /**
                     * Available images in JPG
                     */
                    jpg?: {
                        /**
                         * Image URL JPG (225x335)
                         */
                        image_url?: string;
                    };
                    /**
                     * Available images in WEBP
                     */
                    webp?: {
                        /**
                         * Image URL WEBP (225x335)
                         */
                        image_url?: string;
                    };
                };
                /**
                 * Last Online Date ISO8601
                 */
                last_online?: string;
                /**
                 * User Gender
                 */
                gender?: string;
                /**
                 * Birthday Date ISO8601
                 */
                birthday?: string;
                /**
                 * Location
                 */
                location?: string;
                /**
                 * Joined Date ISO8601
                 */
                joined?: string;
                /**
                 * Anime Stats
                 */
                anime_stats?: {
                    /**
                     * Number of days spent watching Anime
                     */
                    days_watched?: number; // float
                    /**
                     * Mean Score
                     */
                    mean_score?: number; // float
                    /**
                     * Anime Watching
                     */
                    watching?: number;
                    /**
                     * Anime Completed
                     */
                    completed?: number;
                    /**
                     * Anime On-Hold
                     */
                    on_hold?: number;
                    /**
                     * Anime Dropped
                     */
                    dropped?: number;
                    /**
                     * Anime Planned to Watch
                     */
                    plan_to_watch?: number;
                    /**
                     * Total Anime entries on User list
                     */
                    total_entries?: number;
                    /**
                     * Anime re-watched
                     */
                    rewatched?: number;
                    /**
                     * Number of Anime Episodes Watched
                     */
                    episodes_watched?: number;
                };
                /**
                 * Manga Stats
                 */
                manga_stats?: {
                    /**
                     * Number of days spent reading Manga
                     */
                    days_read?: number; // float
                    /**
                     * Mean Score
                     */
                    mean_score?: number; // float
                    /**
                     * Manga Reading
                     */
                    reading?: number;
                    /**
                     * Manga Completed
                     */
                    completed?: number;
                    /**
                     * Manga On-Hold
                     */
                    on_hold?: number;
                    /**
                     * Manga Dropped
                     */
                    dropped?: number;
                    /**
                     * Manga Planned to Read
                     */
                    plan_to_read?: number;
                    /**
                     * Total Manga entries on User list
                     */
                    total_entries?: number;
                    /**
                     * Manga re-read
                     */
                    reread?: number;
                    /**
                     * Number of Manga Chapters Read
                     */
                    chapters_read?: number;
                    /**
                     * Number of Manga Volumes Read
                     */
                    volumes_read?: number;
                };
                /**
                 * Favorite entries
                 */
                favorites?: {
                    /**
                     * Favorite Anime
                     */
                    anime?: /* Entry Meta data */ EntryMeta[];
                    /**
                     * Favorite Manga
                     */
                    manga?: /* Entry Meta data */ EntryMeta[];
                    /**
                     * Favorite Characters
                     */
                    characters?: /* Entry Meta data */ EntryMeta[];
                    /**
                     * Favorite People
                     */
                    people?: /* Entry Meta data */ EntryMeta[];
                };
                /**
                 * User About. NOTE: About information is customizable by users through BBCode on MyAnimeList. This means users can add multimedia content, different text sizes, etc. Due to this freeform, Jikan returns parsed HTML. Validate on your end!
                 */
                about?: string;
            }[];
        }
        /**
         * Watch Episodes
         */
        export interface WatchEpisodes {
            data?: {
                entry?: AnimeMeta;
                /**
                 * Recent Episodes (max 2 listed)
                 */
                episodes?: {
                    /**
                     * MyAnimeList ID
                     */
                    mal_id?: string;
                    /**
                     * MyAnimeList URL
                     */
                    url?: string;
                    /**
                     * Episode Title
                     */
                    title?: string;
                    /**
                     * For MyAnimeList Premium Users
                     */
                    premium?: boolean;
                }[];
                /**
                 * Region Locked Episode
                 */
                region_locked?: boolean;
            }[];
            pagination?: {
                last_visible_page?: number;
                has_next_page?: boolean;
            };
        }
        /**
         * Watch Promos
         */
        export interface WatchPromos {
            pagination?: {
                last_visible_page?: number;
                has_next_page?: boolean;
            };
            /**
             * Promo Title
             */
            title?: string;
            data?: {
                entry?: AnimeMeta;
                trailer?: /* Youtube Details */ Trailer[];
            }[];
        }
    }
}
declare namespace Paths {
    namespace GetAnimeById {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $200 {
                data?: /* Anime Resource */ Components.Schemas.Anime;
            }
            export interface $400 {
            }
        }
    }
    namespace GetAnimeCharacters {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = /* Anime Characters Resource */ Components.Schemas.AnimeCharacters;
            export interface $400 {
            }
        }
    }
    namespace GetAnimeEpisodeById {
        namespace Parameters {
            export type Episode = number;
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
            episode: Parameters.Episode;
        }
        namespace Responses {
            export interface $200 {
                data?: /* Anime Episode Resource */ Components.Schemas.AnimeEpisode;
            }
            export interface $400 {
            }
        }
    }
    namespace GetAnimeEpisodes {
        namespace Parameters {
            export type Id = number;
            export type Page = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
        }
        namespace Responses {
            export type $200 = /* Anime Episodes Resource */ Components.Schemas.AnimeEpisodes;
            export interface $400 {
            }
        }
    }
    namespace GetAnimeExternal {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = /* External links */ Components.Schemas.ExternalLinks;
            export interface $400 {
            }
        }
    }
    namespace GetAnimeForum {
        namespace Parameters {
            export type Filter = "all" | "episode" | "other";
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /* Forum Resource */ Components.Schemas.Forum;
            export interface $400 {
            }
        }
    }
    namespace GetAnimeFullById {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $200 {
                data?: /* Full anime Resource */ Components.Schemas.AnimeFull;
            }
            export interface $400 {
            }
        }
    }
    namespace GetAnimeGenres {
        namespace Parameters {
            export type Filter = /* Filter genres by type */ Components.Schemas.GenreQueryFilter;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /* Genres Collection Resource */ Components.Schemas.Genres;
            export interface $400 {
            }
        }
    }
    namespace GetAnimeMoreInfo {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = /* More Info Resource */ Components.Schemas.Moreinfo;
            export interface $400 {
            }
        }
    }
    namespace GetAnimeNews {
        namespace Parameters {
            export type Id = number;
            export type Page = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
        }
        namespace Responses {
            export type $200 = /* Anime News Resource */ Components.Schemas.AnimeNews;
            export interface $400 {
            }
        }
    }
    namespace GetAnimePictures {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = /* Pictures Resource */ Components.Schemas.PicturesVariants;
            export interface $400 {
            }
        }
    }
    namespace GetAnimeRecommendations {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = /* Entry Recommendations Resource */ Components.Schemas.EntryRecommendations;
            export interface $400 {
            }
        }
    }
    namespace GetAnimeRelations {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $200 {
                data?: /* Related resources */ Components.Schemas.Relation[];
            }
        }
    }
    namespace GetAnimeReviews {
        namespace Parameters {
            export type Id = number;
            export type Page = number;
            export type Preliminary = boolean;
            export type Spoilers = boolean;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            preliminary?: Parameters.Preliminary;
            spoilers?: Parameters.Spoilers;
        }
        namespace Responses {
            export type $200 = /* Anime Reviews Resource */ Components.Schemas.AnimeReviews;
            export interface $400 {
            }
        }
    }
    namespace GetAnimeSearch {
        namespace Parameters {
            export type EndDate = string;
            export type Genres = string;
            export type GenresExclude = string;
            export type Letter = string;
            export type Limit = number;
            export type MaxScore = number;
            export type MinScore = number;
            export type OrderBy = /* Available Anime order_by properties */ Components.Schemas.AnimeSearchQueryOrderby;
            export type Page = number;
            export type Producers = string;
            export type Q = string;
            export type Rating = /* Available Anime audience ratings<br><br><b>Ratings</b><br><ul><li>G - All Ages</li><li>PG - Children</li><li>PG-13 - Teens 13 or older</li><li>R - 17+ (violence & profanity)</li><li>R+ - Mild Nudity</li><li>Rx - Hentai</li></ul> */ Components.Schemas.AnimeSearchQueryRating;
            export type Score = number;
            export type Sfw = boolean;
            export type Sort = /* Search query sort direction */ Components.Schemas.SearchQuerySort;
            export type StartDate = string;
            export type Status = /* Available Anime statuses */ Components.Schemas.AnimeSearchQueryStatus;
            export type Type = /* Available Anime types */ Components.Schemas.AnimeSearchQueryType;
            export type Unapproved = boolean;
        }
        export interface QueryParameters {
            unapproved?: Parameters.Unapproved;
            page?: Parameters.Page;
            limit?: Parameters.Limit;
            q?: Parameters.Q;
            type?: Parameters.Type;
            score?: Parameters.Score;
            min_score?: Parameters.MinScore;
            max_score?: Parameters.MaxScore;
            status?: Parameters.Status;
            rating?: Parameters.Rating;
            sfw?: Parameters.Sfw;
            genres?: Parameters.Genres;
            genres_exclude?: Parameters.GenresExclude;
            order_by?: Parameters.OrderBy;
            sort?: Parameters.Sort;
            letter?: Parameters.Letter;
            producers?: Parameters.Producers;
            start_date?: Parameters.StartDate;
            end_date?: Parameters.EndDate;
        }
        namespace Responses {
            export type $200 = /* Anime Collection Resource */ Components.Schemas.AnimeSearch;
            export interface $400 {
            }
        }
    }
    namespace GetAnimeStaff {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = /* Anime Staff Resource */ Components.Schemas.AnimeStaff;
            export interface $400 {
            }
        }
    }
    namespace GetAnimeStatistics {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = /* Anime Statistics Resource */ Components.Schemas.AnimeStatistics;
            export interface $400 {
            }
        }
    }
    namespace GetAnimeStreaming {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = /* External links */ Components.Schemas.ExternalLinks;
            export interface $400 {
            }
        }
    }
    namespace GetAnimeThemes {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = /* Anime Opening and Ending Themes */ Components.Schemas.AnimeThemes;
            export interface $400 {
            }
        }
    }
    namespace GetAnimeUserUpdates {
        namespace Parameters {
            export type Id = number;
            export type Page = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
        }
        namespace Responses {
            export type $200 = /* Anime User Updates Resource */ Components.Schemas.AnimeUserupdates;
            export interface $400 {
            }
        }
    }
    namespace GetAnimeVideos {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = /* Anime Videos Resource */ Components.Schemas.AnimeVideos;
            export interface $400 {
            }
        }
    }
    namespace GetAnimeVideosEpisodes {
        namespace Parameters {
            export type Id = number;
            export type Page = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
        }
        namespace Responses {
            export type $200 = /* Anime Videos Episodes Resource */ Components.Schemas.AnimeVideosEpisodes;
            export interface $400 {
            }
        }
    }
    namespace GetCharacterAnime {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = /* Character casted in anime */ Components.Schemas.CharacterAnime;
            export interface $400 {
            }
        }
    }
    namespace GetCharacterById {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $200 {
                data?: /* Character Resource */ Components.Schemas.Character;
            }
            export interface $400 {
            }
        }
    }
    namespace GetCharacterFullById {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $200 {
                data?: /* Character Resource */ Components.Schemas.CharacterFull;
            }
            export interface $400 {
            }
        }
    }
    namespace GetCharacterManga {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = /* Character casted in manga */ Components.Schemas.CharacterManga;
            export interface $400 {
            }
        }
    }
    namespace GetCharacterPictures {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = /* Character Pictures */ Components.Schemas.CharacterPictures;
            export interface $400 {
            }
        }
    }
    namespace GetCharacterVoiceActors {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = /* Character voice actors */ Components.Schemas.CharacterVoiceActors;
            export interface $400 {
            }
        }
    }
    namespace GetCharactersSearch {
        namespace Parameters {
            export type Letter = string;
            export type Limit = number;
            export type OrderBy = /* Available Character order_by properties */ Components.Schemas.CharactersSearchQueryOrderby;
            export type Page = number;
            export type Q = string;
            export type Sort = /* Search query sort direction */ Components.Schemas.SearchQuerySort;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            limit?: Parameters.Limit;
            q?: Parameters.Q;
            order_by?: Parameters.OrderBy;
            sort?: Parameters.Sort;
            letter?: Parameters.Letter;
        }
        namespace Responses {
            export type $200 = /* Characters Search Resource */ Components.Schemas.CharactersSearch;
            export interface $400 {
            }
        }
    }
    namespace GetClubMembers {
        namespace Parameters {
            export type Id = number;
            export type Page = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
        }
        namespace Responses {
            /**
             * Club Member
             */
            export interface $200 {
                pagination?: {
                    last_visible_page?: number;
                    has_next_page?: boolean;
                };
                data?: {
                    /**
                     * User's username
                     */
                    username?: string;
                    /**
                     * User URL
                     */
                    url?: string;
                    images?: Components.Schemas.UserImages;
                }[];
            }
            export interface $400 {
            }
        }
    }
    namespace GetClubRelations {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = /* Club Relations */ Components.Schemas.ClubRelations;
            export interface $400 {
            }
        }
    }
    namespace GetClubStaff {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = /* Club Staff Resource */ Components.Schemas.ClubStaff;
            export interface $400 {
            }
        }
    }
    namespace GetClubsById {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $200 {
                data?: /* Club Resource */ Components.Schemas.Club;
            }
            export interface $400 {
            }
        }
    }
    namespace GetClubsSearch {
        namespace Parameters {
            export type Category = /* Club Search Query Category */ Components.Schemas.ClubSearchQueryCategory;
            export type Letter = string;
            export type Limit = number;
            export type OrderBy = /* Club Search Query OrderBy */ Components.Schemas.ClubSearchQueryOrderby;
            export type Page = number;
            export type Q = string;
            export type Sort = /* Search query sort direction */ Components.Schemas.SearchQuerySort;
            export type Type = /* Club Search Query Type */ Components.Schemas.ClubSearchQueryType;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            limit?: Parameters.Limit;
            q?: Parameters.Q;
            type?: Parameters.Type;
            category?: Parameters.Category;
            order_by?: Parameters.OrderBy;
            sort?: Parameters.Sort;
            letter?: Parameters.Letter;
        }
        namespace Responses {
            export type $200 = /* Clubs Search Resource */ Components.Schemas.ClubsSearch;
            export interface $400 {
            }
        }
    }
    namespace GetMagazines {
        namespace Parameters {
            export type Letter = string;
            export type Limit = number;
            export type OrderBy = /* Order by magazine data */ Components.Schemas.MagazinesQueryOrderby;
            export type Page = number;
            export type Q = string;
            export type Sort = /* Search query sort direction */ Components.Schemas.SearchQuerySort;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            limit?: Parameters.Limit;
            q?: Parameters.Q;
            order_by?: Parameters.OrderBy;
            sort?: Parameters.Sort;
            letter?: Parameters.Letter;
        }
        namespace Responses {
            export type $200 = /* Magazine Collection Resource */ Components.Schemas.Magazines;
            export interface $400 {
            }
        }
    }
    namespace GetMangaById {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $200 {
                data?: /* Manga Resource */ Components.Schemas.Manga;
            }
            export interface $400 {
            }
        }
    }
    namespace GetMangaCharacters {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = /* Manga Characters Resource */ Components.Schemas.MangaCharacters;
            export interface $400 {
            }
        }
    }
    namespace GetMangaExternal {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = /* External links */ Components.Schemas.ExternalLinks;
            export interface $400 {
            }
        }
    }
    namespace GetMangaFullById {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $200 {
                data?: /* Manga Resource */ Components.Schemas.MangaFull;
            }
            export interface $400 {
            }
        }
    }
    namespace GetMangaGenres {
        namespace Parameters {
            export type Filter = /* Filter genres by type */ Components.Schemas.GenreQueryFilter;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /* Genres Collection Resource */ Components.Schemas.Genres;
            export interface $400 {
            }
        }
    }
    namespace GetMangaMoreInfo {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = /* More Info Resource */ Components.Schemas.Moreinfo;
            export interface $400 {
            }
        }
    }
    namespace GetMangaNews {
        namespace Parameters {
            export type Id = number;
            export type Page = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
        }
        namespace Responses {
            export type $200 = /* Manga News Resource */ Components.Schemas.MangaNews;
            export interface $400 {
            }
        }
    }
    namespace GetMangaPictures {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = /* Manga Pictures */ Components.Schemas.MangaPictures;
            export interface $400 {
            }
        }
    }
    namespace GetMangaRecommendations {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = /* Entry Recommendations Resource */ Components.Schemas.EntryRecommendations;
            export interface $400 {
            }
        }
    }
    namespace GetMangaRelations {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $200 {
                data?: /* Related resources */ Components.Schemas.Relation[];
            }
            export interface $400 {
            }
        }
    }
    namespace GetMangaReviews {
        namespace Parameters {
            export type Id = number;
            export type Page = number;
            export type Preliminary = boolean;
            export type Spoilers = boolean;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            preliminary?: Parameters.Preliminary;
            spoilers?: Parameters.Spoilers;
        }
        namespace Responses {
            export type $200 = /* Manga Reviews Resource */ Components.Schemas.MangaReviews;
            export interface $400 {
            }
        }
    }
    namespace GetMangaSearch {
        namespace Parameters {
            export type EndDate = string;
            export type Genres = string;
            export type GenresExclude = string;
            export type Letter = string;
            export type Limit = number;
            export type Magazines = string;
            export type MaxScore = number;
            export type MinScore = number;
            export type OrderBy = /* Available Manga order_by properties */ Components.Schemas.MangaSearchQueryOrderby;
            export type Page = number;
            export type Q = string;
            export type Score = number;
            export type Sfw = boolean;
            export type Sort = /* Search query sort direction */ Components.Schemas.SearchQuerySort;
            export type StartDate = string;
            export type Status = /* Available Manga statuses */ Components.Schemas.MangaSearchQueryStatus;
            export type Type = /* Available Manga types */ Components.Schemas.MangaSearchQueryType;
            export type Unapproved = boolean;
        }
        export interface QueryParameters {
            unapproved?: Parameters.Unapproved;
            page?: Parameters.Page;
            limit?: Parameters.Limit;
            q?: Parameters.Q;
            type?: Parameters.Type;
            score?: Parameters.Score;
            min_score?: Parameters.MinScore;
            max_score?: Parameters.MaxScore;
            status?: Parameters.Status;
            sfw?: Parameters.Sfw;
            genres?: Parameters.Genres;
            genres_exclude?: Parameters.GenresExclude;
            order_by?: Parameters.OrderBy;
            sort?: Parameters.Sort;
            letter?: Parameters.Letter;
            magazines?: Parameters.Magazines;
            start_date?: Parameters.StartDate;
            end_date?: Parameters.EndDate;
        }
        namespace Responses {
            export type $200 = /* Manga Search Resource */ Components.Schemas.MangaSearch;
            export interface $400 {
            }
        }
    }
    namespace GetMangaStatistics {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = /* Manga Statistics Resource */ Components.Schemas.MangaStatistics;
            export interface $400 {
            }
        }
    }
    namespace GetMangaTopics {
        namespace Parameters {
            export type Filter = "all" | "episode" | "other";
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /* Forum Resource */ Components.Schemas.Forum;
            export interface $400 {
            }
        }
    }
    namespace GetMangaUserUpdates {
        namespace Parameters {
            export type Id = number;
            export type Page = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
        }
        namespace Responses {
            export type $200 = /* Manga User Updates Resource */ Components.Schemas.MangaUserupdates;
            export interface $400 {
            }
        }
    }
    namespace GetPeopleSearch {
        namespace Parameters {
            export type Letter = string;
            export type Limit = number;
            export type OrderBy = /* Available People order_by properties */ Components.Schemas.PeopleSearchQueryOrderby;
            export type Page = number;
            export type Q = string;
            export type Sort = /* Search query sort direction */ Components.Schemas.SearchQuerySort;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            limit?: Parameters.Limit;
            q?: Parameters.Q;
            order_by?: Parameters.OrderBy;
            sort?: Parameters.Sort;
            letter?: Parameters.Letter;
        }
        namespace Responses {
            export type $200 = /* People Search */ Components.Schemas.PeopleSearch;
            export interface $400 {
            }
        }
    }
    namespace GetPersonAnime {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = /* Person anime staff positions */ Components.Schemas.PersonAnime;
            export interface $400 {
            }
        }
    }
    namespace GetPersonById {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $200 {
                data?: /* Person Resource */ Components.Schemas.Person;
            }
            export interface $400 {
            }
        }
    }
    namespace GetPersonFullById {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $200 {
                data?: /* Person Resource */ Components.Schemas.PersonFull;
            }
            export interface $400 {
            }
        }
    }
    namespace GetPersonManga {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = /* Person's mangaography */ Components.Schemas.PersonManga;
            export interface $400 {
            }
        }
    }
    namespace GetPersonPictures {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = /* Character Pictures */ Components.Schemas.PersonPictures;
            export interface $400 {
            }
        }
    }
    namespace GetPersonVoices {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = /* Person's voice acting roles */ Components.Schemas.PersonVoiceActingRoles;
            export interface $400 {
            }
        }
    }
    namespace GetProducerById {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $200 {
                data?: /* Producers Resource */ Components.Schemas.Producer;
            }
            export interface $400 {
            }
        }
    }
    namespace GetProducerExternal {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = /* External links */ Components.Schemas.ExternalLinks;
            export interface $400 {
            }
        }
    }
    namespace GetProducerFullById {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $200 {
                data?: /* Producers Resource */ Components.Schemas.ProducerFull;
            }
            export interface $400 {
            }
        }
    }
    namespace GetProducers {
        namespace Parameters {
            export type Letter = string;
            export type Limit = number;
            export type OrderBy = /* Producers Search Query Order By */ Components.Schemas.ProducersQueryOrderby;
            export type Page = number;
            export type Q = string;
            export type Sort = /* Search query sort direction */ Components.Schemas.SearchQuerySort;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            limit?: Parameters.Limit;
            q?: Parameters.Q;
            order_by?: Parameters.OrderBy;
            sort?: Parameters.Sort;
            letter?: Parameters.Letter;
        }
        namespace Responses {
            export type $200 = /* Producers Collection Resource */ Components.Schemas.Producers;
            export interface $400 {
            }
        }
    }
    namespace GetRandomAnime {
        namespace Responses {
            export interface $200 {
                data?: /* Anime Resource */ Components.Schemas.Anime;
            }
            export interface $400 {
            }
        }
    }
    namespace GetRandomCharacters {
        namespace Responses {
            export interface $200 {
                data?: /* Character Resource */ Components.Schemas.Character;
            }
            export interface $400 {
            }
        }
    }
    namespace GetRandomManga {
        namespace Responses {
            export interface $200 {
                data?: /* Manga Resource */ Components.Schemas.Manga;
            }
            export interface $400 {
            }
        }
    }
    namespace GetRandomPeople {
        namespace Responses {
            export interface $200 {
                data?: /* Person Resource */ Components.Schemas.Person;
            }
            export interface $400 {
            }
        }
    }
    namespace GetRandomUsers {
        namespace Responses {
            export interface $200 {
                data?: Components.Schemas.UserProfile;
            }
            export interface $400 {
            }
        }
    }
    namespace GetRecentAnimeRecommendations {
        namespace Parameters {
            export type Page = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
        }
        namespace Responses {
            export type $200 = /* Recommendations */ Components.Schemas.Recommendations;
            export interface $400 {
            }
        }
    }
    namespace GetRecentAnimeReviews {
        namespace Parameters {
            export type Page = number;
            export type Preliminary = boolean;
            export type Spoilers = boolean;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            preliminary?: Parameters.Preliminary;
            spoilers?: Parameters.Spoilers;
        }
        namespace Responses {
            export type $200 = any;
            export interface $400 {
            }
        }
    }
    namespace GetRecentMangaRecommendations {
        namespace Parameters {
            export type Page = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
        }
        namespace Responses {
            export type $200 = /* Recommendations */ Components.Schemas.Recommendations;
            export interface $400 {
            }
        }
    }
    namespace GetRecentMangaReviews {
        namespace Parameters {
            export type Page = number;
            export type Preliminary = boolean;
            export type Spoilers = boolean;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            preliminary?: Parameters.Preliminary;
            spoilers?: Parameters.Spoilers;
        }
        namespace Responses {
            export type $200 = any;
            export interface $400 {
            }
        }
    }
    namespace GetSchedules {
        namespace Parameters {
            export type Filter = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday" | "unknown" | "other";
            export type Kids = "true" | "false";
            export type Limit = number;
            export type Page = number;
            export type Sfw = "true" | "false";
            export type Unapproved = boolean;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
            kids?: Parameters.Kids;
            sfw?: Parameters.Sfw;
            unapproved?: Parameters.Unapproved;
            page?: Parameters.Page;
            limit?: Parameters.Limit;
        }
        namespace Responses {
            export type $200 = /* Anime resources currently airing */ Components.Schemas.Schedules;
            export interface $400 {
            }
        }
    }
    namespace GetSeason {
        namespace Parameters {
            export type Continuing = boolean;
            export type Filter = "tv" | "movie" | "ova" | "special" | "ona" | "music";
            export type Limit = number;
            export type Page = number;
            export type Season = string;
            export type Sfw = boolean;
            export type Unapproved = boolean;
            export type Year = number;
        }
        export interface PathParameters {
            year: Parameters.Year;
            season: Parameters.Season;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
            sfw?: Parameters.Sfw;
            unapproved?: Parameters.Unapproved;
            continuing?: Parameters.Continuing;
            page?: Parameters.Page;
            limit?: Parameters.Limit;
        }
        namespace Responses {
            export type $200 = /* Anime Collection Resource */ Components.Schemas.AnimeSearch;
            export interface $400 {
            }
        }
    }
    namespace GetSeasonNow {
        namespace Parameters {
            export type Continuing = boolean;
            export type Filter = "tv" | "movie" | "ova" | "special" | "ona" | "music";
            export type Limit = number;
            export type Page = number;
            export type Sfw = boolean;
            export type Unapproved = boolean;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
            sfw?: Parameters.Sfw;
            unapproved?: Parameters.Unapproved;
            continuing?: Parameters.Continuing;
            page?: Parameters.Page;
            limit?: Parameters.Limit;
        }
        namespace Responses {
            export type $200 = /* Anime Collection Resource */ Components.Schemas.AnimeSearch;
            export interface $400 {
            }
        }
    }
    namespace GetSeasonUpcoming {
        namespace Parameters {
            export type Continuing = boolean;
            export type Filter = "tv" | "movie" | "ova" | "special" | "ona" | "music";
            export type Limit = number;
            export type Page = number;
            export type Sfw = boolean;
            export type Unapproved = boolean;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
            sfw?: Parameters.Sfw;
            unapproved?: Parameters.Unapproved;
            continuing?: Parameters.Continuing;
            page?: Parameters.Page;
            limit?: Parameters.Limit;
        }
        namespace Responses {
            export type $200 = /* Anime Collection Resource */ Components.Schemas.AnimeSearch;
            export interface $400 {
            }
        }
    }
    namespace GetSeasonsList {
        namespace Responses {
            export type $200 = /* List of available seasons */ Components.Schemas.Seasons;
            export interface $400 {
            }
        }
    }
    namespace GetTopAnime {
        namespace Parameters {
            export type Filter = /* Top items filter types */ Components.Schemas.TopAnimeFilter;
            export type Limit = number;
            export type Page = number;
            export type Rating = /* Available Anime audience ratings<br><br><b>Ratings</b><br><ul><li>G - All Ages</li><li>PG - Children</li><li>PG-13 - Teens 13 or older</li><li>R - 17+ (violence & profanity)</li><li>R+ - Mild Nudity</li><li>Rx - Hentai</li></ul> */ Components.Schemas.AnimeSearchQueryRating;
            export type Sfw = boolean;
            export type Type = /* Available Anime types */ Components.Schemas.AnimeSearchQueryType;
        }
        export interface QueryParameters {
            type?: Parameters.Type;
            filter?: Parameters.Filter;
            rating?: Parameters.Rating;
            sfw?: Parameters.Sfw;
            page?: Parameters.Page;
            limit?: Parameters.Limit;
        }
        namespace Responses {
            export type $200 = /* Anime Collection Resource */ Components.Schemas.AnimeSearch;
            export interface $400 {
            }
        }
    }
    namespace GetTopCharacters {
        namespace Parameters {
            export type Limit = number;
            export type Page = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            limit?: Parameters.Limit;
        }
        namespace Responses {
            export type $200 = /* Characters Search Resource */ Components.Schemas.CharactersSearch;
            export interface $400 {
            }
        }
    }
    namespace GetTopManga {
        namespace Parameters {
            export type Filter = /* Top items filter types */ Components.Schemas.TopMangaFilter;
            export type Limit = number;
            export type Page = number;
            export type Type = /* Available Manga types */ Components.Schemas.MangaSearchQueryType;
        }
        export interface QueryParameters {
            type?: Parameters.Type;
            filter?: Parameters.Filter;
            page?: Parameters.Page;
            limit?: Parameters.Limit;
        }
        namespace Responses {
            export type $200 = /* Manga Search Resource */ Components.Schemas.MangaSearch;
            export interface $400 {
            }
        }
    }
    namespace GetTopPeople {
        namespace Parameters {
            export type Limit = number;
            export type Page = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            limit?: Parameters.Limit;
        }
        namespace Responses {
            export type $200 = /* People Search */ Components.Schemas.PeopleSearch;
            export interface $400 {
            }
        }
    }
    namespace GetTopReviews {
        namespace Parameters {
            export type Page = number;
            export type Preliminary = boolean;
            export type Spoilers = boolean;
            export type Type = /* The type of reviews to filter by. Defaults to anime. */ Components.Schemas.TopReviewsTypeEnum;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            type?: Parameters.Type;
            preliminary?: Parameters.Preliminary;
            spoilers?: Parameters.Spoilers;
        }
        namespace Responses {
            export interface $200 {
                data?: {
                    data?: ({
                        user?: Components.Schemas.UserMeta;
                        anime?: Components.Schemas.AnimeMeta;
                        /**
                         * MyAnimeList ID
                         */
                        mal_id?: number;
                        /**
                         * MyAnimeList review URL
                         */
                        url?: string;
                        /**
                         * Entry type
                         */
                        type?: string;
                        /**
                         * User reaction count on the review
                         */
                        reactions?: {
                            /**
                             * Overall reaction count
                             */
                            overall?: number;
                            /**
                             * Nice reaction count
                             */
                            nice?: number;
                            /**
                             * Love it reaction count
                             */
                            love_it?: number;
                            /**
                             * Funny reaction count
                             */
                            funny?: number;
                            /**
                             * Confusing reaction count
                             */
                            confusing?: number;
                            /**
                             * Informative reaction count
                             */
                            informative?: number;
                            /**
                             * Well written reaction count
                             */
                            well_written?: number;
                            /**
                             * Creative reaction count
                             */
                            creative?: number;
                        };
                        /**
                         * Review created date ISO8601
                         */
                        date?: string;
                        /**
                         * Review content
                         */
                        review?: string;
                        /**
                         * Number of user votes on the Review
                         */
                        score?: number;
                        /**
                         * Review tags
                         */
                        tags?: string[];
                        /**
                         * The review contains spoiler
                         */
                        is_spoiler?: boolean;
                        /**
                         * The review was made before the entry was completed
                         */
                        is_preliminary?: boolean;
                        /**
                         * Number of episodes watched
                         */
                        episodes_watched?: number;
                    } | {
                        user?: Components.Schemas.UserMeta;
                        manga?: Components.Schemas.MangaMeta;
                        /**
                         * MyAnimeList ID
                         */
                        mal_id?: number;
                        /**
                         * MyAnimeList review URL
                         */
                        url?: string;
                        /**
                         * Entry type
                         */
                        type?: string;
                        /**
                         * User reaction count on the review
                         */
                        reactions?: {
                            /**
                             * Overall reaction count
                             */
                            overall?: number;
                            /**
                             * Nice reaction count
                             */
                            nice?: number;
                            /**
                             * Love it reaction count
                             */
                            love_it?: number;
                            /**
                             * Funny reaction count
                             */
                            funny?: number;
                            /**
                             * Confusing reaction count
                             */
                            confusing?: number;
                            /**
                             * Informative reaction count
                             */
                            informative?: number;
                            /**
                             * Well written reaction count
                             */
                            well_written?: number;
                            /**
                             * Creative reaction count
                             */
                            creative?: number;
                        };
                        /**
                         * Review created date ISO8601
                         */
                        date?: string;
                        /**
                         * Review content
                         */
                        review?: string;
                        /**
                         * Number of user votes on the Review
                         */
                        score?: number;
                        /**
                         * Review tags
                         */
                        tags?: string[];
                        /**
                         * The review contains spoiler
                         */
                        is_spoiler?: boolean;
                        /**
                         * The review was made before the entry was completed
                         */
                        is_preliminary?: boolean;
                    })[];
                    pagination?: {
                        last_visible_page?: number;
                        has_next_page?: boolean;
                    };
                };
            }
            export interface $400 {
            }
        }
    }
    namespace GetUserAbout {
        namespace Parameters {
            export type Username = string;
        }
        export interface PathParameters {
            username: Parameters.Username;
        }
        namespace Responses {
            export type $200 = Components.Schemas.UserAbout;
            export interface $400 {
            }
        }
    }
    namespace GetUserAnimelist {
        namespace Parameters {
            export type Status = /* User's anime list status filter options */ Components.Schemas.UserAnimeListStatusFilter;
            export type Username = string;
        }
        export interface PathParameters {
            username: Parameters.Username;
        }
        export interface QueryParameters {
            status?: Parameters.Status;
        }
        namespace Responses {
            export type $200 = any;
            export interface $400 {
            }
        }
    }
    namespace GetUserById {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $200 {
                data?: /* User Meta By ID */ Components.Schemas.UserById;
            }
            export interface $400 {
            }
        }
    }
    namespace GetUserClubs {
        namespace Parameters {
            export type Page = number;
            export type Username = string;
        }
        export interface PathParameters {
            username: Parameters.Username;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
        }
        namespace Responses {
            export type $200 = /* User Clubs */ Components.Schemas.UserClubs;
            export interface $400 {
            }
        }
    }
    namespace GetUserExternal {
        namespace Parameters {
            export type Username = string;
        }
        export interface PathParameters {
            username: Parameters.Username;
        }
        namespace Responses {
            export type $200 = /* External links */ Components.Schemas.ExternalLinks;
            export interface $400 {
            }
        }
    }
    namespace GetUserFavorites {
        namespace Parameters {
            export type Username = string;
        }
        export interface PathParameters {
            username: Parameters.Username;
        }
        namespace Responses {
            export interface $200 {
                data?: Components.Schemas.UserFavorites;
            }
            export interface $400 {
            }
        }
    }
    namespace GetUserFriends {
        namespace Parameters {
            export type Page = number;
            export type Username = string;
        }
        export interface PathParameters {
            username: Parameters.Username;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
        }
        namespace Responses {
            export type $200 = /* User Friends */ Components.Schemas.UserFriends;
            export interface $400 {
            }
        }
    }
    namespace GetUserFullProfile {
        namespace Parameters {
            export type Username = string;
        }
        export interface PathParameters {
            username: Parameters.Username;
        }
        namespace Responses {
            export interface $200 {
                data?: /* Transform the resource into an array. */ Components.Schemas.UserProfileFull;
            }
            export interface $400 {
            }
        }
    }
    namespace GetUserHistory {
        namespace Parameters {
            export type Type = "anime" | "manga";
            export type Username = string;
        }
        export interface PathParameters {
            username: Parameters.Username;
        }
        export interface QueryParameters {
            type?: Parameters.Type;
        }
        namespace Responses {
            export type $200 = Components.Schemas.UserHistory;
            export interface $400 {
            }
        }
    }
    namespace GetUserMangaList {
        namespace Parameters {
            export type Status = /* User's anime list status filter options */ Components.Schemas.UserMangaListStatusFilter;
            export type Username = string;
        }
        export interface PathParameters {
            username: Parameters.Username;
        }
        export interface QueryParameters {
            status?: Parameters.Status;
        }
        namespace Responses {
            export type $200 = any;
            export interface $400 {
            }
        }
    }
    namespace GetUserProfile {
        namespace Parameters {
            export type Username = string;
        }
        export interface PathParameters {
            username: Parameters.Username;
        }
        namespace Responses {
            export interface $200 {
                data?: Components.Schemas.UserProfile;
            }
            export interface $400 {
            }
        }
    }
    namespace GetUserRecommendations {
        namespace Parameters {
            export type Page = number;
            export type Username = string;
        }
        export interface PathParameters {
            username: Parameters.Username;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
        }
        namespace Responses {
            export type $200 = /* Recommendations */ Components.Schemas.Recommendations;
            export interface $400 {
            }
        }
    }
    namespace GetUserReviews {
        namespace Parameters {
            export type Page = number;
            export type Username = string;
        }
        export interface PathParameters {
            username: Parameters.Username;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
        }
        namespace Responses {
            export interface $200 {
                data?: {
                    data?: ({
                        user?: Components.Schemas.UserMeta;
                        anime?: Components.Schemas.AnimeMeta;
                        /**
                         * MyAnimeList ID
                         */
                        mal_id?: number;
                        /**
                         * MyAnimeList review URL
                         */
                        url?: string;
                        /**
                         * Entry type
                         */
                        type?: string;
                        /**
                         * User reaction count on the review
                         */
                        reactions?: {
                            /**
                             * Overall reaction count
                             */
                            overall?: number;
                            /**
                             * Nice reaction count
                             */
                            nice?: number;
                            /**
                             * Love it reaction count
                             */
                            love_it?: number;
                            /**
                             * Funny reaction count
                             */
                            funny?: number;
                            /**
                             * Confusing reaction count
                             */
                            confusing?: number;
                            /**
                             * Informative reaction count
                             */
                            informative?: number;
                            /**
                             * Well written reaction count
                             */
                            well_written?: number;
                            /**
                             * Creative reaction count
                             */
                            creative?: number;
                        };
                        /**
                         * Review created date ISO8601
                         */
                        date?: string;
                        /**
                         * Review content
                         */
                        review?: string;
                        /**
                         * Number of user votes on the Review
                         */
                        score?: number;
                        /**
                         * Review tags
                         */
                        tags?: string[];
                        /**
                         * The review contains spoiler
                         */
                        is_spoiler?: boolean;
                        /**
                         * The review was made before the entry was completed
                         */
                        is_preliminary?: boolean;
                        /**
                         * Number of episodes watched
                         */
                        episodes_watched?: number;
                    } | {
                        user?: Components.Schemas.UserMeta;
                        manga?: Components.Schemas.MangaMeta;
                        /**
                         * MyAnimeList ID
                         */
                        mal_id?: number;
                        /**
                         * MyAnimeList review URL
                         */
                        url?: string;
                        /**
                         * Entry type
                         */
                        type?: string;
                        /**
                         * User reaction count on the review
                         */
                        reactions?: {
                            /**
                             * Overall reaction count
                             */
                            overall?: number;
                            /**
                             * Nice reaction count
                             */
                            nice?: number;
                            /**
                             * Love it reaction count
                             */
                            love_it?: number;
                            /**
                             * Funny reaction count
                             */
                            funny?: number;
                            /**
                             * Confusing reaction count
                             */
                            confusing?: number;
                            /**
                             * Informative reaction count
                             */
                            informative?: number;
                            /**
                             * Well written reaction count
                             */
                            well_written?: number;
                            /**
                             * Creative reaction count
                             */
                            creative?: number;
                        };
                        /**
                         * Review created date ISO8601
                         */
                        date?: string;
                        /**
                         * Review content
                         */
                        review?: string;
                        /**
                         * Number of user votes on the Review
                         */
                        score?: number;
                        /**
                         * Review tags
                         */
                        tags?: string[];
                        /**
                         * The review contains spoiler
                         */
                        is_spoiler?: boolean;
                        /**
                         * The review was made before the entry was completed
                         */
                        is_preliminary?: boolean;
                    })[];
                    pagination?: {
                        last_visible_page?: number;
                        has_next_page?: boolean;
                    };
                };
            }
            export interface $400 {
            }
        }
    }
    namespace GetUserStatistics {
        namespace Parameters {
            export type Username = string;
        }
        export interface PathParameters {
            username: Parameters.Username;
        }
        namespace Responses {
            export type $200 = Components.Schemas.UserStatistics;
            export interface $400 {
            }
        }
    }
    namespace GetUserUpdates {
        namespace Parameters {
            export type Username = string;
        }
        export interface PathParameters {
            username: Parameters.Username;
        }
        namespace Responses {
            export type $200 = Components.Schemas.UserUpdates;
            export interface $400 {
            }
        }
    }
    namespace GetUsersSearch {
        namespace Parameters {
            export type Gender = /* Users Search Query Gender. */ Components.Schemas.UsersSearchQueryGender;
            export type Limit = number;
            export type Location = string;
            export type MaxAge = number;
            export type MinAge = number;
            export type Page = number;
            export type Q = string;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            limit?: Parameters.Limit;
            q?: Parameters.Q;
            gender?: Parameters.Gender;
            location?: Parameters.Location;
            maxAge?: Parameters.MaxAge;
            minAge?: Parameters.MinAge;
        }
        namespace Responses {
            export type $200 = /* User Results */ Components.Schemas.UsersSearch;
            export interface $400 {
            }
        }
    }
    namespace GetWatchPopularEpisodes {
        namespace Responses {
            export type $200 = /* Watch Episodes */ Components.Schemas.WatchEpisodes;
            export interface $400 {
            }
        }
    }
    namespace GetWatchPopularPromos {
        namespace Responses {
            export type $200 = /* Watch Promos */ Components.Schemas.WatchPromos;
            export interface $400 {
            }
        }
    }
    namespace GetWatchRecentEpisodes {
        namespace Responses {
            export type $200 = /* Watch Episodes */ Components.Schemas.WatchEpisodes;
            export interface $400 {
            }
        }
    }
    namespace GetWatchRecentPromos {
        namespace Parameters {
            export type Page = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
        }
        namespace Responses {
            export type $200 = /* Watch Promos */ Components.Schemas.WatchPromos;
            export interface $400 {
            }
        }
    }
}

export interface OperationMethods {
  /**
   * getAnimeFullById
   */
  'getAnimeFullById'(
    parameters?: Parameters<Paths.GetAnimeFullById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAnimeFullById.Responses.$200>
  /**
   * getAnimeById
   */
  'getAnimeById'(
    parameters?: Parameters<Paths.GetAnimeById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAnimeById.Responses.$200>
  /**
   * getAnimeCharacters
   */
  'getAnimeCharacters'(
    parameters?: Parameters<Paths.GetAnimeCharacters.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAnimeCharacters.Responses.$200>
  /**
   * getAnimeStaff
   */
  'getAnimeStaff'(
    parameters?: Parameters<Paths.GetAnimeStaff.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAnimeStaff.Responses.$200>
  /**
   * getAnimeEpisodes
   */
  'getAnimeEpisodes'(
    parameters?: Parameters<Paths.GetAnimeEpisodes.QueryParameters & Paths.GetAnimeEpisodes.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAnimeEpisodes.Responses.$200>
  /**
   * getAnimeEpisodeById
   */
  'getAnimeEpisodeById'(
    parameters?: Parameters<Paths.GetAnimeEpisodeById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAnimeEpisodeById.Responses.$200>
  /**
   * getAnimeNews
   */
  'getAnimeNews'(
    parameters?: Parameters<Paths.GetAnimeNews.QueryParameters & Paths.GetAnimeNews.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAnimeNews.Responses.$200>
  /**
   * getAnimeForum
   */
  'getAnimeForum'(
    parameters?: Parameters<Paths.GetAnimeForum.QueryParameters & Paths.GetAnimeForum.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAnimeForum.Responses.$200>
  /**
   * getAnimeVideos
   */
  'getAnimeVideos'(
    parameters?: Parameters<Paths.GetAnimeVideos.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAnimeVideos.Responses.$200>
  /**
   * getAnimeVideosEpisodes
   */
  'getAnimeVideosEpisodes'(
    parameters?: Parameters<Paths.GetAnimeVideosEpisodes.QueryParameters & Paths.GetAnimeVideosEpisodes.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAnimeVideosEpisodes.Responses.$200>
  /**
   * getAnimePictures
   */
  'getAnimePictures'(
    parameters?: Parameters<Paths.GetAnimePictures.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAnimePictures.Responses.$200>
  /**
   * getAnimeStatistics
   */
  'getAnimeStatistics'(
    parameters?: Parameters<Paths.GetAnimeStatistics.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAnimeStatistics.Responses.$200>
  /**
   * getAnimeMoreInfo
   */
  'getAnimeMoreInfo'(
    parameters?: Parameters<Paths.GetAnimeMoreInfo.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAnimeMoreInfo.Responses.$200>
  /**
   * getAnimeRecommendations
   */
  'getAnimeRecommendations'(
    parameters?: Parameters<Paths.GetAnimeRecommendations.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAnimeRecommendations.Responses.$200>
  /**
   * getAnimeUserUpdates
   */
  'getAnimeUserUpdates'(
    parameters?: Parameters<Paths.GetAnimeUserUpdates.QueryParameters & Paths.GetAnimeUserUpdates.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAnimeUserUpdates.Responses.$200>
  /**
   * getAnimeReviews
   */
  'getAnimeReviews'(
    parameters?: Parameters<Paths.GetAnimeReviews.QueryParameters & Paths.GetAnimeReviews.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAnimeReviews.Responses.$200>
  /**
   * getAnimeRelations
   */
  'getAnimeRelations'(
    parameters?: Parameters<Paths.GetAnimeRelations.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAnimeRelations.Responses.$200>
  /**
   * getAnimeThemes
   */
  'getAnimeThemes'(
    parameters?: Parameters<Paths.GetAnimeThemes.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAnimeThemes.Responses.$200>
  /**
   * getAnimeExternal
   */
  'getAnimeExternal'(
    parameters?: Parameters<Paths.GetAnimeExternal.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAnimeExternal.Responses.$200>
  /**
   * getAnimeStreaming
   */
  'getAnimeStreaming'(
    parameters?: Parameters<Paths.GetAnimeStreaming.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAnimeStreaming.Responses.$200>
  /**
   * getCharacterFullById
   */
  'getCharacterFullById'(
    parameters?: Parameters<Paths.GetCharacterFullById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCharacterFullById.Responses.$200>
  /**
   * getCharacterById
   */
  'getCharacterById'(
    parameters?: Parameters<Paths.GetCharacterById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCharacterById.Responses.$200>
  /**
   * getCharacterAnime
   */
  'getCharacterAnime'(
    parameters?: Parameters<Paths.GetCharacterAnime.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCharacterAnime.Responses.$200>
  /**
   * getCharacterManga
   */
  'getCharacterManga'(
    parameters?: Parameters<Paths.GetCharacterManga.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCharacterManga.Responses.$200>
  /**
   * getCharacterVoiceActors
   */
  'getCharacterVoiceActors'(
    parameters?: Parameters<Paths.GetCharacterVoiceActors.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCharacterVoiceActors.Responses.$200>
  /**
   * getCharacterPictures
   */
  'getCharacterPictures'(
    parameters?: Parameters<Paths.GetCharacterPictures.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCharacterPictures.Responses.$200>
  /**
   * getClubsById
   */
  'getClubsById'(
    parameters?: Parameters<Paths.GetClubsById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetClubsById.Responses.$200>
  /**
   * getClubMembers
   */
  'getClubMembers'(
    parameters?: Parameters<Paths.GetClubMembers.QueryParameters & Paths.GetClubMembers.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetClubMembers.Responses.$200>
  /**
   * getClubStaff
   */
  'getClubStaff'(
    parameters?: Parameters<Paths.GetClubStaff.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetClubStaff.Responses.$200>
  /**
   * getClubRelations
   */
  'getClubRelations'(
    parameters?: Parameters<Paths.GetClubRelations.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetClubRelations.Responses.$200>
  /**
   * getAnimeGenres
   */
  'getAnimeGenres'(
    parameters?: Parameters<Paths.GetAnimeGenres.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAnimeGenres.Responses.$200>
  /**
   * getMangaGenres
   */
  'getMangaGenres'(
    parameters?: Parameters<Paths.GetMangaGenres.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetMangaGenres.Responses.$200>
  /**
   * getMagazines
   */
  'getMagazines'(
    parameters?: Parameters<Paths.GetMagazines.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetMagazines.Responses.$200>
  /**
   * getMangaFullById
   */
  'getMangaFullById'(
    parameters?: Parameters<Paths.GetMangaFullById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetMangaFullById.Responses.$200>
  /**
   * getMangaById
   */
  'getMangaById'(
    parameters?: Parameters<Paths.GetMangaById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetMangaById.Responses.$200>
  /**
   * getMangaCharacters
   */
  'getMangaCharacters'(
    parameters?: Parameters<Paths.GetMangaCharacters.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetMangaCharacters.Responses.$200>
  /**
   * getMangaNews
   */
  'getMangaNews'(
    parameters?: Parameters<Paths.GetMangaNews.QueryParameters & Paths.GetMangaNews.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetMangaNews.Responses.$200>
  /**
   * getMangaTopics
   */
  'getMangaTopics'(
    parameters?: Parameters<Paths.GetMangaTopics.QueryParameters & Paths.GetMangaTopics.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetMangaTopics.Responses.$200>
  /**
   * getMangaPictures
   */
  'getMangaPictures'(
    parameters?: Parameters<Paths.GetMangaPictures.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetMangaPictures.Responses.$200>
  /**
   * getMangaStatistics
   */
  'getMangaStatistics'(
    parameters?: Parameters<Paths.GetMangaStatistics.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetMangaStatistics.Responses.$200>
  /**
   * getMangaMoreInfo
   */
  'getMangaMoreInfo'(
    parameters?: Parameters<Paths.GetMangaMoreInfo.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetMangaMoreInfo.Responses.$200>
  /**
   * getMangaRecommendations
   */
  'getMangaRecommendations'(
    parameters?: Parameters<Paths.GetMangaRecommendations.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetMangaRecommendations.Responses.$200>
  /**
   * getMangaUserUpdates
   */
  'getMangaUserUpdates'(
    parameters?: Parameters<Paths.GetMangaUserUpdates.QueryParameters & Paths.GetMangaUserUpdates.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetMangaUserUpdates.Responses.$200>
  /**
   * getMangaReviews
   */
  'getMangaReviews'(
    parameters?: Parameters<Paths.GetMangaReviews.QueryParameters & Paths.GetMangaReviews.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetMangaReviews.Responses.$200>
  /**
   * getMangaRelations
   */
  'getMangaRelations'(
    parameters?: Parameters<Paths.GetMangaRelations.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetMangaRelations.Responses.$200>
  /**
   * getMangaExternal
   */
  'getMangaExternal'(
    parameters?: Parameters<Paths.GetMangaExternal.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetMangaExternal.Responses.$200>
  /**
   * getPersonFullById
   */
  'getPersonFullById'(
    parameters?: Parameters<Paths.GetPersonFullById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPersonFullById.Responses.$200>
  /**
   * getPersonById
   */
  'getPersonById'(
    parameters?: Parameters<Paths.GetPersonById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPersonById.Responses.$200>
  /**
   * getPersonAnime
   */
  'getPersonAnime'(
    parameters?: Parameters<Paths.GetPersonAnime.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPersonAnime.Responses.$200>
  /**
   * getPersonVoices
   */
  'getPersonVoices'(
    parameters?: Parameters<Paths.GetPersonVoices.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPersonVoices.Responses.$200>
  /**
   * getPersonManga
   */
  'getPersonManga'(
    parameters?: Parameters<Paths.GetPersonManga.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPersonManga.Responses.$200>
  /**
   * getPersonPictures
   */
  'getPersonPictures'(
    parameters?: Parameters<Paths.GetPersonPictures.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPersonPictures.Responses.$200>
  /**
   * getProducerById
   */
  'getProducerById'(
    parameters?: Parameters<Paths.GetProducerById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetProducerById.Responses.$200>
  /**
   * getProducerFullById
   */
  'getProducerFullById'(
    parameters?: Parameters<Paths.GetProducerFullById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetProducerFullById.Responses.$200>
  /**
   * getProducerExternal
   */
  'getProducerExternal'(
    parameters?: Parameters<Paths.GetProducerExternal.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetProducerExternal.Responses.$200>
  /**
   * getRandomAnime
   */
  'getRandomAnime'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetRandomAnime.Responses.$200>
  /**
   * getRandomManga
   */
  'getRandomManga'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetRandomManga.Responses.$200>
  /**
   * getRandomCharacters
   */
  'getRandomCharacters'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetRandomCharacters.Responses.$200>
  /**
   * getRandomPeople
   */
  'getRandomPeople'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetRandomPeople.Responses.$200>
  /**
   * getRandomUsers
   */
  'getRandomUsers'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetRandomUsers.Responses.$200>
  /**
   * getRecentAnimeRecommendations
   */
  'getRecentAnimeRecommendations'(
    parameters?: Parameters<Paths.GetRecentAnimeRecommendations.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetRecentAnimeRecommendations.Responses.$200>
  /**
   * getRecentMangaRecommendations
   */
  'getRecentMangaRecommendations'(
    parameters?: Parameters<Paths.GetRecentMangaRecommendations.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetRecentMangaRecommendations.Responses.$200>
  /**
   * getRecentAnimeReviews
   */
  'getRecentAnimeReviews'(
    parameters?: Parameters<Paths.GetRecentAnimeReviews.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetRecentAnimeReviews.Responses.$200>
  /**
   * getRecentMangaReviews
   */
  'getRecentMangaReviews'(
    parameters?: Parameters<Paths.GetRecentMangaReviews.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetRecentMangaReviews.Responses.$200>
  /**
   * getSchedules
   */
  'getSchedules'(
    parameters?: Parameters<Paths.GetSchedules.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSchedules.Responses.$200>
  /**
   * getAnimeSearch
   */
  'getAnimeSearch'(
    parameters?: Parameters<Paths.GetAnimeSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAnimeSearch.Responses.$200>
  /**
   * getMangaSearch
   */
  'getMangaSearch'(
    parameters?: Parameters<Paths.GetMangaSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetMangaSearch.Responses.$200>
  /**
   * getPeopleSearch
   */
  'getPeopleSearch'(
    parameters?: Parameters<Paths.GetPeopleSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPeopleSearch.Responses.$200>
  /**
   * getCharactersSearch
   */
  'getCharactersSearch'(
    parameters?: Parameters<Paths.GetCharactersSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCharactersSearch.Responses.$200>
  /**
   * getUsersSearch
   */
  'getUsersSearch'(
    parameters?: Parameters<Paths.GetUsersSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetUsersSearch.Responses.$200>
  /**
   * getUserById
   */
  'getUserById'(
    parameters?: Parameters<Paths.GetUserById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetUserById.Responses.$200>
  /**
   * getClubsSearch
   */
  'getClubsSearch'(
    parameters?: Parameters<Paths.GetClubsSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetClubsSearch.Responses.$200>
  /**
   * getProducers
   */
  'getProducers'(
    parameters?: Parameters<Paths.GetProducers.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetProducers.Responses.$200>
  /**
   * getSeasonNow
   */
  'getSeasonNow'(
    parameters?: Parameters<Paths.GetSeasonNow.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSeasonNow.Responses.$200>
  /**
   * getSeason
   */
  'getSeason'(
    parameters?: Parameters<Paths.GetSeason.QueryParameters & Paths.GetSeason.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSeason.Responses.$200>
  /**
   * getSeasonsList
   */
  'getSeasonsList'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSeasonsList.Responses.$200>
  /**
   * getSeasonUpcoming
   */
  'getSeasonUpcoming'(
    parameters?: Parameters<Paths.GetSeasonUpcoming.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSeasonUpcoming.Responses.$200>
  /**
   * getTopAnime
   */
  'getTopAnime'(
    parameters?: Parameters<Paths.GetTopAnime.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetTopAnime.Responses.$200>
  /**
   * getTopManga
   */
  'getTopManga'(
    parameters?: Parameters<Paths.GetTopManga.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetTopManga.Responses.$200>
  /**
   * getTopPeople
   */
  'getTopPeople'(
    parameters?: Parameters<Paths.GetTopPeople.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetTopPeople.Responses.$200>
  /**
   * getTopCharacters
   */
  'getTopCharacters'(
    parameters?: Parameters<Paths.GetTopCharacters.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetTopCharacters.Responses.$200>
  /**
   * getTopReviews
   */
  'getTopReviews'(
    parameters?: Parameters<Paths.GetTopReviews.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetTopReviews.Responses.$200>
  /**
   * getUserFullProfile
   */
  'getUserFullProfile'(
    parameters?: Parameters<Paths.GetUserFullProfile.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetUserFullProfile.Responses.$200>
  /**
   * getUserProfile
   */
  'getUserProfile'(
    parameters?: Parameters<Paths.GetUserProfile.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetUserProfile.Responses.$200>
  /**
   * getUserStatistics
   */
  'getUserStatistics'(
    parameters?: Parameters<Paths.GetUserStatistics.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetUserStatistics.Responses.$200>
  /**
   * getUserFavorites
   */
  'getUserFavorites'(
    parameters?: Parameters<Paths.GetUserFavorites.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetUserFavorites.Responses.$200>
  /**
   * getUserUpdates
   */
  'getUserUpdates'(
    parameters?: Parameters<Paths.GetUserUpdates.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetUserUpdates.Responses.$200>
  /**
   * getUserAbout
   */
  'getUserAbout'(
    parameters?: Parameters<Paths.GetUserAbout.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetUserAbout.Responses.$200>
  /**
   * getUserHistory
   */
  'getUserHistory'(
    parameters?: Parameters<Paths.GetUserHistory.QueryParameters & Paths.GetUserHistory.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetUserHistory.Responses.$200>
  /**
   * getUserFriends
   */
  'getUserFriends'(
    parameters?: Parameters<Paths.GetUserFriends.QueryParameters & Paths.GetUserFriends.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetUserFriends.Responses.$200>
  /**
   * getUserAnimelist - User Anime lists have been discontinued since May 1st, 2022. <a href='https://docs.google.com/document/d/1-6H-agSnqa8Mfmw802UYfGQrceIEnAaEh4uCXAPiX5A'>Read more</a>
   */
  'getUserAnimelist'(
    parameters?: Parameters<Paths.GetUserAnimelist.QueryParameters & Paths.GetUserAnimelist.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetUserAnimelist.Responses.$200>
  /**
   * getUserMangaList - User Manga lists have been discontinued since May 1st, 2022. <a href='https://docs.google.com/document/d/1-6H-agSnqa8Mfmw802UYfGQrceIEnAaEh4uCXAPiX5A'>Read more</a>
   */
  'getUserMangaList'(
    parameters?: Parameters<Paths.GetUserMangaList.QueryParameters & Paths.GetUserMangaList.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetUserMangaList.Responses.$200>
  /**
   * getUserReviews
   */
  'getUserReviews'(
    parameters?: Parameters<Paths.GetUserReviews.QueryParameters & Paths.GetUserReviews.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetUserReviews.Responses.$200>
  /**
   * getUserRecommendations
   */
  'getUserRecommendations'(
    parameters?: Parameters<Paths.GetUserRecommendations.QueryParameters & Paths.GetUserRecommendations.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetUserRecommendations.Responses.$200>
  /**
   * getUserClubs
   */
  'getUserClubs'(
    parameters?: Parameters<Paths.GetUserClubs.QueryParameters & Paths.GetUserClubs.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetUserClubs.Responses.$200>
  /**
   * getUserExternal
   */
  'getUserExternal'(
    parameters?: Parameters<Paths.GetUserExternal.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetUserExternal.Responses.$200>
  /**
   * getWatchRecentEpisodes
   */
  'getWatchRecentEpisodes'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetWatchRecentEpisodes.Responses.$200>
  /**
   * getWatchPopularEpisodes
   */
  'getWatchPopularEpisodes'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetWatchPopularEpisodes.Responses.$200>
  /**
   * getWatchRecentPromos
   */
  'getWatchRecentPromos'(
    parameters?: Parameters<Paths.GetWatchRecentPromos.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetWatchRecentPromos.Responses.$200>
  /**
   * getWatchPopularPromos
   */
  'getWatchPopularPromos'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetWatchPopularPromos.Responses.$200>
}

export interface PathsDictionary {
  ['/anime/{id}/full']: {
    /**
     * getAnimeFullById
     */
    'get'(
      parameters?: Parameters<Paths.GetAnimeFullById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAnimeFullById.Responses.$200>
  }
  ['/anime/{id}']: {
    /**
     * getAnimeById
     */
    'get'(
      parameters?: Parameters<Paths.GetAnimeById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAnimeById.Responses.$200>
  }
  ['/anime/{id}/characters']: {
    /**
     * getAnimeCharacters
     */
    'get'(
      parameters?: Parameters<Paths.GetAnimeCharacters.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAnimeCharacters.Responses.$200>
  }
  ['/anime/{id}/staff']: {
    /**
     * getAnimeStaff
     */
    'get'(
      parameters?: Parameters<Paths.GetAnimeStaff.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAnimeStaff.Responses.$200>
  }
  ['/anime/{id}/episodes']: {
    /**
     * getAnimeEpisodes
     */
    'get'(
      parameters?: Parameters<Paths.GetAnimeEpisodes.QueryParameters & Paths.GetAnimeEpisodes.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAnimeEpisodes.Responses.$200>
  }
  ['/anime/{id}/episodes/{episode}']: {
    /**
     * getAnimeEpisodeById
     */
    'get'(
      parameters?: Parameters<Paths.GetAnimeEpisodeById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAnimeEpisodeById.Responses.$200>
  }
  ['/anime/{id}/news']: {
    /**
     * getAnimeNews
     */
    'get'(
      parameters?: Parameters<Paths.GetAnimeNews.QueryParameters & Paths.GetAnimeNews.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAnimeNews.Responses.$200>
  }
  ['/anime/{id}/forum']: {
    /**
     * getAnimeForum
     */
    'get'(
      parameters?: Parameters<Paths.GetAnimeForum.QueryParameters & Paths.GetAnimeForum.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAnimeForum.Responses.$200>
  }
  ['/anime/{id}/videos']: {
    /**
     * getAnimeVideos
     */
    'get'(
      parameters?: Parameters<Paths.GetAnimeVideos.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAnimeVideos.Responses.$200>
  }
  ['/anime/{id}/videos/episodes']: {
    /**
     * getAnimeVideosEpisodes
     */
    'get'(
      parameters?: Parameters<Paths.GetAnimeVideosEpisodes.QueryParameters & Paths.GetAnimeVideosEpisodes.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAnimeVideosEpisodes.Responses.$200>
  }
  ['/anime/{id}/pictures']: {
    /**
     * getAnimePictures
     */
    'get'(
      parameters?: Parameters<Paths.GetAnimePictures.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAnimePictures.Responses.$200>
  }
  ['/anime/{id}/statistics']: {
    /**
     * getAnimeStatistics
     */
    'get'(
      parameters?: Parameters<Paths.GetAnimeStatistics.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAnimeStatistics.Responses.$200>
  }
  ['/anime/{id}/moreinfo']: {
    /**
     * getAnimeMoreInfo
     */
    'get'(
      parameters?: Parameters<Paths.GetAnimeMoreInfo.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAnimeMoreInfo.Responses.$200>
  }
  ['/anime/{id}/recommendations']: {
    /**
     * getAnimeRecommendations
     */
    'get'(
      parameters?: Parameters<Paths.GetAnimeRecommendations.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAnimeRecommendations.Responses.$200>
  }
  ['/anime/{id}/userupdates']: {
    /**
     * getAnimeUserUpdates
     */
    'get'(
      parameters?: Parameters<Paths.GetAnimeUserUpdates.QueryParameters & Paths.GetAnimeUserUpdates.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAnimeUserUpdates.Responses.$200>
  }
  ['/anime/{id}/reviews']: {
    /**
     * getAnimeReviews
     */
    'get'(
      parameters?: Parameters<Paths.GetAnimeReviews.QueryParameters & Paths.GetAnimeReviews.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAnimeReviews.Responses.$200>
  }
  ['/anime/{id}/relations']: {
    /**
     * getAnimeRelations
     */
    'get'(
      parameters?: Parameters<Paths.GetAnimeRelations.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAnimeRelations.Responses.$200>
  }
  ['/anime/{id}/themes']: {
    /**
     * getAnimeThemes
     */
    'get'(
      parameters?: Parameters<Paths.GetAnimeThemes.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAnimeThemes.Responses.$200>
  }
  ['/anime/{id}/external']: {
    /**
     * getAnimeExternal
     */
    'get'(
      parameters?: Parameters<Paths.GetAnimeExternal.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAnimeExternal.Responses.$200>
  }
  ['/anime/{id}/streaming']: {
    /**
     * getAnimeStreaming
     */
    'get'(
      parameters?: Parameters<Paths.GetAnimeStreaming.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAnimeStreaming.Responses.$200>
  }
  ['/characters/{id}/full']: {
    /**
     * getCharacterFullById
     */
    'get'(
      parameters?: Parameters<Paths.GetCharacterFullById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCharacterFullById.Responses.$200>
  }
  ['/characters/{id}']: {
    /**
     * getCharacterById
     */
    'get'(
      parameters?: Parameters<Paths.GetCharacterById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCharacterById.Responses.$200>
  }
  ['/characters/{id}/anime']: {
    /**
     * getCharacterAnime
     */
    'get'(
      parameters?: Parameters<Paths.GetCharacterAnime.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCharacterAnime.Responses.$200>
  }
  ['/characters/{id}/manga']: {
    /**
     * getCharacterManga
     */
    'get'(
      parameters?: Parameters<Paths.GetCharacterManga.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCharacterManga.Responses.$200>
  }
  ['/characters/{id}/voices']: {
    /**
     * getCharacterVoiceActors
     */
    'get'(
      parameters?: Parameters<Paths.GetCharacterVoiceActors.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCharacterVoiceActors.Responses.$200>
  }
  ['/characters/{id}/pictures']: {
    /**
     * getCharacterPictures
     */
    'get'(
      parameters?: Parameters<Paths.GetCharacterPictures.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCharacterPictures.Responses.$200>
  }
  ['/clubs/{id}']: {
    /**
     * getClubsById
     */
    'get'(
      parameters?: Parameters<Paths.GetClubsById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetClubsById.Responses.$200>
  }
  ['/clubs/{id}/members']: {
    /**
     * getClubMembers
     */
    'get'(
      parameters?: Parameters<Paths.GetClubMembers.QueryParameters & Paths.GetClubMembers.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetClubMembers.Responses.$200>
  }
  ['/clubs/{id}/staff']: {
    /**
     * getClubStaff
     */
    'get'(
      parameters?: Parameters<Paths.GetClubStaff.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetClubStaff.Responses.$200>
  }
  ['/clubs/{id}/relations']: {
    /**
     * getClubRelations
     */
    'get'(
      parameters?: Parameters<Paths.GetClubRelations.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetClubRelations.Responses.$200>
  }
  ['/genres/anime']: {
    /**
     * getAnimeGenres
     */
    'get'(
      parameters?: Parameters<Paths.GetAnimeGenres.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAnimeGenres.Responses.$200>
  }
  ['/genres/manga']: {
    /**
     * getMangaGenres
     */
    'get'(
      parameters?: Parameters<Paths.GetMangaGenres.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetMangaGenres.Responses.$200>
  }
  ['/magazines']: {
    /**
     * getMagazines
     */
    'get'(
      parameters?: Parameters<Paths.GetMagazines.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetMagazines.Responses.$200>
  }
  ['/manga/{id}/full']: {
    /**
     * getMangaFullById
     */
    'get'(
      parameters?: Parameters<Paths.GetMangaFullById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetMangaFullById.Responses.$200>
  }
  ['/manga/{id}']: {
    /**
     * getMangaById
     */
    'get'(
      parameters?: Parameters<Paths.GetMangaById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetMangaById.Responses.$200>
  }
  ['/manga/{id}/characters']: {
    /**
     * getMangaCharacters
     */
    'get'(
      parameters?: Parameters<Paths.GetMangaCharacters.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetMangaCharacters.Responses.$200>
  }
  ['/manga/{id}/news']: {
    /**
     * getMangaNews
     */
    'get'(
      parameters?: Parameters<Paths.GetMangaNews.QueryParameters & Paths.GetMangaNews.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetMangaNews.Responses.$200>
  }
  ['/manga/{id}/forum']: {
    /**
     * getMangaTopics
     */
    'get'(
      parameters?: Parameters<Paths.GetMangaTopics.QueryParameters & Paths.GetMangaTopics.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetMangaTopics.Responses.$200>
  }
  ['/manga/{id}/pictures']: {
    /**
     * getMangaPictures
     */
    'get'(
      parameters?: Parameters<Paths.GetMangaPictures.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetMangaPictures.Responses.$200>
  }
  ['/manga/{id}/statistics']: {
    /**
     * getMangaStatistics
     */
    'get'(
      parameters?: Parameters<Paths.GetMangaStatistics.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetMangaStatistics.Responses.$200>
  }
  ['/manga/{id}/moreinfo']: {
    /**
     * getMangaMoreInfo
     */
    'get'(
      parameters?: Parameters<Paths.GetMangaMoreInfo.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetMangaMoreInfo.Responses.$200>
  }
  ['/manga/{id}/recommendations']: {
    /**
     * getMangaRecommendations
     */
    'get'(
      parameters?: Parameters<Paths.GetMangaRecommendations.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetMangaRecommendations.Responses.$200>
  }
  ['/manga/{id}/userupdates']: {
    /**
     * getMangaUserUpdates
     */
    'get'(
      parameters?: Parameters<Paths.GetMangaUserUpdates.QueryParameters & Paths.GetMangaUserUpdates.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetMangaUserUpdates.Responses.$200>
  }
  ['/manga/{id}/reviews']: {
    /**
     * getMangaReviews
     */
    'get'(
      parameters?: Parameters<Paths.GetMangaReviews.QueryParameters & Paths.GetMangaReviews.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetMangaReviews.Responses.$200>
  }
  ['/manga/{id}/relations']: {
    /**
     * getMangaRelations
     */
    'get'(
      parameters?: Parameters<Paths.GetMangaRelations.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetMangaRelations.Responses.$200>
  }
  ['/manga/{id}/external']: {
    /**
     * getMangaExternal
     */
    'get'(
      parameters?: Parameters<Paths.GetMangaExternal.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetMangaExternal.Responses.$200>
  }
  ['/people/{id}/full']: {
    /**
     * getPersonFullById
     */
    'get'(
      parameters?: Parameters<Paths.GetPersonFullById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPersonFullById.Responses.$200>
  }
  ['/people/{id}']: {
    /**
     * getPersonById
     */
    'get'(
      parameters?: Parameters<Paths.GetPersonById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPersonById.Responses.$200>
  }
  ['/people/{id}/anime']: {
    /**
     * getPersonAnime
     */
    'get'(
      parameters?: Parameters<Paths.GetPersonAnime.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPersonAnime.Responses.$200>
  }
  ['/people/{id}/voices']: {
    /**
     * getPersonVoices
     */
    'get'(
      parameters?: Parameters<Paths.GetPersonVoices.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPersonVoices.Responses.$200>
  }
  ['/people/{id}/manga']: {
    /**
     * getPersonManga
     */
    'get'(
      parameters?: Parameters<Paths.GetPersonManga.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPersonManga.Responses.$200>
  }
  ['/people/{id}/pictures']: {
    /**
     * getPersonPictures
     */
    'get'(
      parameters?: Parameters<Paths.GetPersonPictures.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPersonPictures.Responses.$200>
  }
  ['/producers/{id}']: {
    /**
     * getProducerById
     */
    'get'(
      parameters?: Parameters<Paths.GetProducerById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetProducerById.Responses.$200>
  }
  ['/producers/{id}/full']: {
    /**
     * getProducerFullById
     */
    'get'(
      parameters?: Parameters<Paths.GetProducerFullById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetProducerFullById.Responses.$200>
  }
  ['/producers/{id}/external']: {
    /**
     * getProducerExternal
     */
    'get'(
      parameters?: Parameters<Paths.GetProducerExternal.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetProducerExternal.Responses.$200>
  }
  ['/random/anime']: {
    /**
     * getRandomAnime
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetRandomAnime.Responses.$200>
  }
  ['/random/manga']: {
    /**
     * getRandomManga
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetRandomManga.Responses.$200>
  }
  ['/random/characters']: {
    /**
     * getRandomCharacters
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetRandomCharacters.Responses.$200>
  }
  ['/random/people']: {
    /**
     * getRandomPeople
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetRandomPeople.Responses.$200>
  }
  ['/random/users']: {
    /**
     * getRandomUsers
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetRandomUsers.Responses.$200>
  }
  ['/recommendations/anime']: {
    /**
     * getRecentAnimeRecommendations
     */
    'get'(
      parameters?: Parameters<Paths.GetRecentAnimeRecommendations.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetRecentAnimeRecommendations.Responses.$200>
  }
  ['/recommendations/manga']: {
    /**
     * getRecentMangaRecommendations
     */
    'get'(
      parameters?: Parameters<Paths.GetRecentMangaRecommendations.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetRecentMangaRecommendations.Responses.$200>
  }
  ['/reviews/anime']: {
    /**
     * getRecentAnimeReviews
     */
    'get'(
      parameters?: Parameters<Paths.GetRecentAnimeReviews.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetRecentAnimeReviews.Responses.$200>
  }
  ['/reviews/manga']: {
    /**
     * getRecentMangaReviews
     */
    'get'(
      parameters?: Parameters<Paths.GetRecentMangaReviews.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetRecentMangaReviews.Responses.$200>
  }
  ['/schedules']: {
    /**
     * getSchedules
     */
    'get'(
      parameters?: Parameters<Paths.GetSchedules.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSchedules.Responses.$200>
  }
  ['/anime']: {
    /**
     * getAnimeSearch
     */
    'get'(
      parameters?: Parameters<Paths.GetAnimeSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAnimeSearch.Responses.$200>
  }
  ['/manga']: {
    /**
     * getMangaSearch
     */
    'get'(
      parameters?: Parameters<Paths.GetMangaSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetMangaSearch.Responses.$200>
  }
  ['/people']: {
    /**
     * getPeopleSearch
     */
    'get'(
      parameters?: Parameters<Paths.GetPeopleSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPeopleSearch.Responses.$200>
  }
  ['/characters']: {
    /**
     * getCharactersSearch
     */
    'get'(
      parameters?: Parameters<Paths.GetCharactersSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCharactersSearch.Responses.$200>
  }
  ['/users']: {
    /**
     * getUsersSearch
     */
    'get'(
      parameters?: Parameters<Paths.GetUsersSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetUsersSearch.Responses.$200>
  }
  ['/users/userbyid/{id}']: {
    /**
     * getUserById
     */
    'get'(
      parameters?: Parameters<Paths.GetUserById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetUserById.Responses.$200>
  }
  ['/clubs']: {
    /**
     * getClubsSearch
     */
    'get'(
      parameters?: Parameters<Paths.GetClubsSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetClubsSearch.Responses.$200>
  }
  ['/producers']: {
    /**
     * getProducers
     */
    'get'(
      parameters?: Parameters<Paths.GetProducers.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetProducers.Responses.$200>
  }
  ['/seasons/now']: {
    /**
     * getSeasonNow
     */
    'get'(
      parameters?: Parameters<Paths.GetSeasonNow.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSeasonNow.Responses.$200>
  }
  ['/seasons/{year}/{season}']: {
    /**
     * getSeason
     */
    'get'(
      parameters?: Parameters<Paths.GetSeason.QueryParameters & Paths.GetSeason.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSeason.Responses.$200>
  }
  ['/seasons']: {
    /**
     * getSeasonsList
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSeasonsList.Responses.$200>
  }
  ['/seasons/upcoming']: {
    /**
     * getSeasonUpcoming
     */
    'get'(
      parameters?: Parameters<Paths.GetSeasonUpcoming.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSeasonUpcoming.Responses.$200>
  }
  ['/top/anime']: {
    /**
     * getTopAnime
     */
    'get'(
      parameters?: Parameters<Paths.GetTopAnime.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetTopAnime.Responses.$200>
  }
  ['/top/manga']: {
    /**
     * getTopManga
     */
    'get'(
      parameters?: Parameters<Paths.GetTopManga.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetTopManga.Responses.$200>
  }
  ['/top/people']: {
    /**
     * getTopPeople
     */
    'get'(
      parameters?: Parameters<Paths.GetTopPeople.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetTopPeople.Responses.$200>
  }
  ['/top/characters']: {
    /**
     * getTopCharacters
     */
    'get'(
      parameters?: Parameters<Paths.GetTopCharacters.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetTopCharacters.Responses.$200>
  }
  ['/top/reviews']: {
    /**
     * getTopReviews
     */
    'get'(
      parameters?: Parameters<Paths.GetTopReviews.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetTopReviews.Responses.$200>
  }
  ['/users/{username}/full']: {
    /**
     * getUserFullProfile
     */
    'get'(
      parameters?: Parameters<Paths.GetUserFullProfile.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetUserFullProfile.Responses.$200>
  }
  ['/users/{username}']: {
    /**
     * getUserProfile
     */
    'get'(
      parameters?: Parameters<Paths.GetUserProfile.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetUserProfile.Responses.$200>
  }
  ['/users/{username}/statistics']: {
    /**
     * getUserStatistics
     */
    'get'(
      parameters?: Parameters<Paths.GetUserStatistics.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetUserStatistics.Responses.$200>
  }
  ['/users/{username}/favorites']: {
    /**
     * getUserFavorites
     */
    'get'(
      parameters?: Parameters<Paths.GetUserFavorites.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetUserFavorites.Responses.$200>
  }
  ['/users/{username}/userupdates']: {
    /**
     * getUserUpdates
     */
    'get'(
      parameters?: Parameters<Paths.GetUserUpdates.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetUserUpdates.Responses.$200>
  }
  ['/users/{username}/about']: {
    /**
     * getUserAbout
     */
    'get'(
      parameters?: Parameters<Paths.GetUserAbout.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetUserAbout.Responses.$200>
  }
  ['/users/{username}/history']: {
    /**
     * getUserHistory
     */
    'get'(
      parameters?: Parameters<Paths.GetUserHistory.QueryParameters & Paths.GetUserHistory.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetUserHistory.Responses.$200>
  }
  ['/users/{username}/friends']: {
    /**
     * getUserFriends
     */
    'get'(
      parameters?: Parameters<Paths.GetUserFriends.QueryParameters & Paths.GetUserFriends.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetUserFriends.Responses.$200>
  }
  ['/users/{username}/animelist']: {
    /**
     * getUserAnimelist - User Anime lists have been discontinued since May 1st, 2022. <a href='https://docs.google.com/document/d/1-6H-agSnqa8Mfmw802UYfGQrceIEnAaEh4uCXAPiX5A'>Read more</a>
     */
    'get'(
      parameters?: Parameters<Paths.GetUserAnimelist.QueryParameters & Paths.GetUserAnimelist.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetUserAnimelist.Responses.$200>
  }
  ['/users/{username}/mangalist']: {
    /**
     * getUserMangaList - User Manga lists have been discontinued since May 1st, 2022. <a href='https://docs.google.com/document/d/1-6H-agSnqa8Mfmw802UYfGQrceIEnAaEh4uCXAPiX5A'>Read more</a>
     */
    'get'(
      parameters?: Parameters<Paths.GetUserMangaList.QueryParameters & Paths.GetUserMangaList.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetUserMangaList.Responses.$200>
  }
  ['/users/{username}/reviews']: {
    /**
     * getUserReviews
     */
    'get'(
      parameters?: Parameters<Paths.GetUserReviews.QueryParameters & Paths.GetUserReviews.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetUserReviews.Responses.$200>
  }
  ['/users/{username}/recommendations']: {
    /**
     * getUserRecommendations
     */
    'get'(
      parameters?: Parameters<Paths.GetUserRecommendations.QueryParameters & Paths.GetUserRecommendations.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetUserRecommendations.Responses.$200>
  }
  ['/users/{username}/clubs']: {
    /**
     * getUserClubs
     */
    'get'(
      parameters?: Parameters<Paths.GetUserClubs.QueryParameters & Paths.GetUserClubs.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetUserClubs.Responses.$200>
  }
  ['/users/{username}/external']: {
    /**
     * getUserExternal
     */
    'get'(
      parameters?: Parameters<Paths.GetUserExternal.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetUserExternal.Responses.$200>
  }
  ['/watch/episodes']: {
    /**
     * getWatchRecentEpisodes
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetWatchRecentEpisodes.Responses.$200>
  }
  ['/watch/episodes/popular']: {
    /**
     * getWatchPopularEpisodes
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetWatchPopularEpisodes.Responses.$200>
  }
  ['/watch/promos']: {
    /**
     * getWatchRecentPromos
     */
    'get'(
      parameters?: Parameters<Paths.GetWatchRecentPromos.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetWatchRecentPromos.Responses.$200>
  }
  ['/watch/promos/popular']: {
    /**
     * getWatchPopularPromos
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetWatchPopularPromos.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>

