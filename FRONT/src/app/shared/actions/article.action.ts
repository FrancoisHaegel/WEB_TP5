import { Article } from '../../models/article/article';

export class AddArticle {
    static readonly type = '[Article] Add';

    constructor(public payload: Article) {}
}

export class DelArticle {
    static readonly type = '[Article] Del';

    constructor(public payload: Article) {}
}

export class DtlArticle{
    static readonly type = '[Article] Dtl';

    constructor(public payload: Article) {}
}