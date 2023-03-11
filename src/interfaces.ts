export interface IUseButtons {
readonly likeActive: boolean,
readonly likesCount: number,
readonly dislikeActive: boolean,
readonly dislikesCount: number,
readonly dislikeHandler: () => void,
readonly likeHandler: () => void
 
}