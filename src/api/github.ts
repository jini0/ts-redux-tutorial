// 7.29 💖메모장참고(서버 따로 안만들고 깃허브에 사용자정보가져오기 이용해서 할거임)💖
import axios from "axios";

//axios 쓸거라 async 써주기
export const getUserProfile = async (username: string) => {
    const response = await axios.get<GithubProfile>(`https://api.github.com/users/${username}`)         //제네릭 타입으로 <GithubProfile>
    return response.data; //데이터 값을 바로 반환
}

//https://api.github.com/users/jini0
//https://app.quicktype.io/   ---> Language를 typescirpt로 바꾸고 https://api.github.com/users/jini0 여기에 있는 내용들을 왼쪽에 JSON형식에 넣어주면 오른쪽에 코드가 자동으로 생김!
//https://blog.naver.com/pink_candy02/222833876402
export interface GithubProfile {
    login:               string;
    id:                  number;
    node_id:             string;
    avatar_url:          string;
    gravatar_id:         string;
    url:                 string;
    html_url:            string;
    followers_url:       string;
    following_url:       string;
    gists_url:           string;
    starred_url:         string;
    subscriptions_url:   string;
    organizations_url:   string;
    repos_url:           string;
    events_url:          string;
    received_events_url: string;
    type:                string;
    site_admin:          boolean;
    name:                string;      //이거 null -> string으로 변경해줌
    company:             string;    //이거 null -> string으로 변경해줌
    blog:                string;    //이거 null -> string으로 변경해줌
    location:            null;
    email:               null;
    hireable:            null;
    bio:                 string;          //이거 null -> string으로 변경해줌
    twitter_username:    null;
    public_repos:        number;
    public_gists:        number;
    followers:           number;
    following:           number;
    created_at:          Date;
    updated_at:          Date;
}