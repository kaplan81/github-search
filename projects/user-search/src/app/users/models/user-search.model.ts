import * as fromUsersModels from '@user-search-users/models';

export interface UsersSearch {
  total_count: number;
  incomplete_results: boolean;
  items: UserItem[];
}

export interface UserItem {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
}

export interface MappedUsersSearch {
  currentPage: number;
  perPageCount: number;
  query: string;
  totalCount: number;
  totalPages: number;
  users: string[] | fromUsersModels.User[];
}
