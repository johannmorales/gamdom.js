export interface GamesListResponse {
  games: Game[];
  likedGames: any[];
}

export interface Game {
  totalCount: number;
  gamesList: GamesList[];
}

export interface StaticData {
  game_code: string;
  game_id: any;
  url_thumb: string;
  url_background: string;
  default_provider_name: string;
  platforms: string;
  name: string;
  freebet_support: boolean;
  enabled: boolean;
  category: string;
  blocked_countries: any;
  gamdom_enabled: boolean;
  likes: number;
  featured: boolean;
  filters: string;
  created: string;
  position: number;
  featured_section_id: any;
  featured_section_seq: number;
  is_drops_and_wins: boolean;
  is_jackpot: boolean;
  theme: any[];
  imported_from: string;
  provider_id: string;
  producer_id: string;
  feature_group: any;
  release_date: any;
  early_release: boolean;
  url_thumb_override: any;
  url_background_override: any;
  rtp: number;
  rtp_override: any;
  features: string[];
  modified_date: string;
  blocked_countries_byprov: any;
  priority: number;
  allowed_currencies: any;
  provider_name: string;
}

export interface GamesList {
  staticData: StaticData;
  isLiked: any;
  countrySupport: boolean;
}

export async function gamesList(
  config: {
    sectionType: 'slots' | 'hot' | 'latest' | 'top' | 'all';
    limit?: number;
    page?: number;
  }[],
) {
  const response = await fetch(
    'https://gamdom.com/client-api/casino/games-list',
    {
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify({config}),
      method: 'POST',
    },
  );
  return (await response.json()) as GamesListResponse;
}

export async function gamesCount(config: {
  sectionType: 'slots' | 'hot' | 'latest' | 'top' | 'all';
}) {
  const response = await fetch(
    'https://gamdom.com/client-api/casino/games-count',
    {
      headers: {
        accept: '*/*',
        'content-type': 'application/json',
      },
      body: JSON.stringify({config}),
      method: 'POST',
    },
  );

  return Number.parseInt(await response.text());
}
