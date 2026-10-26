import { MetadataRoute } from 'next';
import { SERVICES, DENTISTS, BLOG_POSTS } from '@/lib/clinic-data';
import { BASE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/services', '/reviews', '/team', '/quote', '/contact', '/blog'];
  const coreRoutes = routes.map((route) => ({
    url: `${BASE_URL}${route}/`, lastModified: new Date(), changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route === '/quote' ? 0.9 : 0.8,
  }));
  const serviceRoutes = SERVICES.map((service) => ({ url: `${BASE_URL}/${service.slug}/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 }));
  const teamRoutes = DENTISTS.map((person) => ({ url: `${BASE_URL}/team/${person.slug}/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 }));
  const blogRoutes = BLOG_POSTS.map((post) => ({ url: `${BASE_URL}/blog/${post.slug}/`, lastModified: new Date(post.lastUpdated), changeFrequency: 'monthly' as const, priority: 0.6 }));
  return [...coreRoutes, ...serviceRoutes, ...teamRoutes, ...blogRoutes];
}
