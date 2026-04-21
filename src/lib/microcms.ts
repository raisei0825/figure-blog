import { createClient } from 'microcms-js-sdk';
import type { MicroCMSImage, MicroCMSListResponse, MicroCMSQueries } from 'microcms-js-sdk';

// ---- クライアント ----
export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN as string,
  apiKey: import.meta.env.MICROCMS_API_KEY as string,
});

// ---- 型定義 ----
export type Category =
  | 'ichiban-kuji'
  | 'prize'
  | 'new-arrival';

export type PriceRange = 'under5k' | 'under10k' | 'under20k' | 'over20k';

/** microCMS 繰り返しフィールド：アフィリエイトリンク */
export type AffiliateLink = {
  fieldId: string;
  store: string;
  url: string;
  price?: number;
};

/** microCMS 繰り返しフィールド：タグ */
export type Tag = {
  fieldId: string;
  tag: string;
};

/** ブログ記事 */
export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  // カスタムフィールド
  title: string;
  description: string;
  body: string;
  category: Category;
  tags?: Tag[];
  heroImage?: MicroCMSImage;
  publishDate?: string;
  featured?: boolean;
  priceRange?: PriceRange;
  manufacturer?: string;
  rating?: number;
  affiliateLinks?: AffiliateLink[];
};

// ---- fetch 関数 ----

/** 記事一覧取得 */
export async function getBlogPosts(
  queries?: MicroCMSQueries,
): Promise<MicroCMSListResponse<Blog>> {
  return client.getList<Blog>({ endpoint: 'blog', queries });
}

/** 記事1件取得 */
export async function getBlogPost(
  contentId: string,
  queries?: MicroCMSQueries,
): Promise<Blog> {
  return client.getListDetail<Blog>({ endpoint: 'blog', contentId, queries });
}

/** getStaticPaths 用：全記事ID取得 */
export async function getAllBlogIds(): Promise<string[]> {
  const data = await client.getList<Blog>({
    endpoint: 'blog',
    queries: { fields: 'id', limit: 100 },
  });
  return data.contents.map((post) => post.id);
}

/** 日付フォーマット（publishDate があればそれを、なければ publishedAt を使用） */
export function resolveDate(post: Blog): Date {
  return new Date(post.publishDate ?? post.publishedAt);
}

/** タグ配列を文字列配列に変換 */
export function resolveTags(tags?: Tag[]): string[] {
  if (!tags) return [];
  return tags.map((t) => t.tag);
}
