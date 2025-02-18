import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET /api/cart - 获取用户购物车
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = parseInt(searchParams.get('userId') || '');

    if (!userId) {
      return NextResponse.json(
        { error: '用户ID为必填项' },
        { status: 400 }
      );
    }

    const cartItems = await prisma.cartItem.findMany({
      where: { userId },
      include: {
        product: {
          select: {
            name: true,
            price: true,
            imageUrl: true,
            stock: true,
          },
        },
      },
    });

    return NextResponse.json(cartItems);
  } catch (error) {
    return NextResponse.json(
      { error: '获取购物车失败' },
      { status: 500 }
    );
  }
}

// POST /api/cart - 添加商品到购物车
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, productId, quantity } = body;

    // 验证必填字段
    if (!userId || !productId || !quantity) {
      return NextResponse.json(
        { error: '用户ID、产品ID和数量为必填项' },
        { status: 400 }
      );
    }

    // 检查产品是否存在并有足够库存
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return NextResponse.json(
        { error: '产品不存在' },
        { status: 404 }
      );
    }

    if (product.stock < quantity) {
      return NextResponse.json(
        { error: '库存不足' },
        { status: 400 }
      );
    }

    // 检查购物车是否已有该商品
    const existingCartItem = await prisma.cartItem.findFirst({
      where: {
        userId,
        productId,
      },
    });

    let cartItem;

    if (existingCartItem) {
      // 更新现有购物车项
      cartItem = await prisma.cartItem.update({
        where: { id: existingCartItem.id },
        data: {
          quantity: existingCartItem.quantity + quantity,
        },
        include: {
          product: {
            select: {
              name: true,
              price: true,
              imageUrl: true,
            },
          },
        },
      });
    } else {
      // 创建新的购物车项
      cartItem = await prisma.cartItem.create({
        data: {
          userId,
          productId,
          quantity,
        },
        include: {
          product: {
            select: {
              name: true,
              price: true,
              imageUrl: true,
            },
          },
        },
      });
    }

    return NextResponse.json(cartItem, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: '添加到购物车失败' },
      { status: 500 }
    );
  }
}