import { Product } from '@/data/products';

const API_BASE_URL = '/api';

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface ProductsResponse extends PaginatedResponse<Product> {}

export async function getProducts(params?: {
  page?: number;
  limit?: number;
  search?: string;
}) {
  const searchParams = new URLSearchParams();
  if (params?.page) searchParams.set('page', params.page.toString());
  if (params?.limit) searchParams.set('limit', params.limit.toString());
  if (params?.search) searchParams.set('search', params.search);

  const response = await fetch(
    `${API_BASE_URL}/products?${searchParams.toString()}`
  );

  if (!response.ok) {
    throw new Error('获取产品列表失败');
  }

  return response.json() as Promise<ProductsResponse>;
}

export async function getProductById(id: string) {
  const response = await fetch(`${API_BASE_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error('获取产品详情失败');
  }

  return response.json() as Promise<Product>;
}