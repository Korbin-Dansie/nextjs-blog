/**
 * This view model is for displaying a blog post usually in a list
 */
export class BlogDisplayViewModel {
    constructor(
        public blogId: number,
        public title: string,
        public body: string,
        public userId: number,
        public firstName: string,
        public lastName: string,
        ) {}
  }
  