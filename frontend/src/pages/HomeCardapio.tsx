import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/ui/Card';

/**
 * Tela de Home do Cardápio (PWA)
 * Baseada na variação _1 do Google Stitch.
 */
const HomeCardapio: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#181111] dark:text-white min-h-screen">
      {/* Barra de Navegação Superior */}
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <div className="text-primary size-10 flex items-center justify-center cursor-pointer">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </div>
          <h1 className="text-[#181111] dark:text-white text-xl font-bold leading-tight tracking-tight flex-1 text-center">Bella Pizza</h1>
          <div className="flex items-center justify-end">
            <button className="relative flex items-center justify-center rounded-lg size-10 bg-transparent text-[#181111] dark:text-white active:scale-90 transition-transform">
              <span className="material-symbols-outlined text-3xl">shopping_cart</span>
              <span className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white dark:border-background-dark">2</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-md mx-auto pb-24">
        {/* Barra de Pesquisa */}
        <div className="px-4 py-3">
          <div className="flex w-full items-stretch rounded-xl h-12 bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="text-gray-400 flex items-center justify-center pl-4">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input
              className="flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 px-4 pl-2 text-base font-normal placeholder:text-gray-400 outline-none dark:text-white"
              placeholder="Qual pizza você deseja hoje?"
            />
          </div>
        </div>

        {/* Carrossel de Promoções */}
        <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory">
          <div className="flex p-4 gap-4">
            {/* Promo 1 */}
            <div className="snap-center flex-shrink-0 w-[85vw] max-w-[320px] group cursor-pointer active:scale-[0.98] transition-transform">
              <div
                className="w-full bg-center bg-no-repeat aspect-[16/9] bg-cover rounded-xl shadow-md overflow-hidden flex flex-col justify-end p-4 relative"
                style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCi5BpxKqAXjWE6ald_uyW-Vxr3FVtiMvmu0kxgGlvlLC_YXeJJ4MPjx5ZCZATsi7lNdVi4dZJjZnv8E0iiEaXZ7rzz0FiZYt2ShS6IOZbfOq7BI9xGxqIm7RHXEXUNSQu78p8suC45m0V_7HLdK2XZoyQtm_P8O4XM2Ab6dSjcoph-rrmHj8xvJp_oPfNTI6EBnxlwDiQum-K5gW6PF-yYd-yDV4iViFG5DNMD8jDA_JwKTB79ZzkFoJZKfoXkL0riMnGZFMe9AzU")' }}
              >
                <p className="text-white text-lg font-bold">Promoção Terça em Dobro</p>
                <p className="text-white/80 text-sm">Compre 1 e leve a segunda grátis</p>
              </div>
            </div>
            {/* Promo 2 */}
            <div className="snap-center flex-shrink-0 w-[85vw] max-w-[320px] cursor-pointer active:scale-[0.98] transition-transform">
              <div
                className="w-full bg-center bg-no-repeat aspect-[16/9] bg-cover rounded-xl shadow-md overflow-hidden flex flex-col justify-end p-4 relative"
                style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1mdziDFMEOK-wa9ZVPlSGbIN4ZokUbfDyYdYmzfDPjktDjauoGCo-LpN-HTDRVT-Uur7D1VL6NszogjjmFDJPPCp-BActQaO02YNvx8UYVGSyHro61WXCFNmtyZSdOOQeKw7iXoh3PnH-fhI_XHxqVYOf6BW3QZRCX2y_O2cHNocI5DFeLQ-_KG3gbplAcn9pQSmU6UzT6WVcB4F-urTYuVNtFdJ6tl7gavs25xIl8F8GwJV2iUkFOr_sJU1AAeUFJ9w-w1gQx7A")' }}
              >
                <p className="text-white text-lg font-bold">Novidade: Calabresa Gourmet</p>
                <p className="text-white/80 text-sm">Ingredientes selecionados</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs de Categorias */}
        <div className="pb-3 mt-2 overflow-x-auto no-scrollbar sticky top-[72px] bg-background-light dark:bg-background-dark z-40">
          <div className="flex border-b border-gray-200 dark:border-gray-800 px-4 gap-6">
            <button className="flex flex-col items-center justify-center border-b-[3px] border-primary text-primary gap-2 pb-3 pt-2 shrink-0">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 shadow-sm border-2 border-primary"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDt7j9pd9LeNJa5oA0yEOKrLvekL2dfg0IB961SC_JZJ-92QrgTngbhfjuj5aKpxU3SV6g6Qv4Ke6i58Ne7Qlca-bZBJQdLcSaXE6AGzkNlSYFrxIPvFZlw4iYPGHmA6wbrDukH2bsaQm9bWyQs-rCOxEFEU2XlxPVklFt5fLIIaH-3D--3mnKaw4ZVxExLiQYzATIUjgrbRypbMaM3l_nsw6UCEaKwXIGmgIeHT9TRnKqAzawt3JEEbxa_aFfee6Eed8jn-vqlT2g")' }}
              ></div>
              <p className="text-sm font-bold">Pizzas</p>
            </button>
            <button className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-gray-500 dark:text-gray-400 gap-2 pb-3 pt-2 shrink-0">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 grayscale-[0.5] opacity-80"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXwzHbGIcpL6wtx1i2LpnCTq99L11Zyb2JudP3_iEatR7Vs4kvlpFaDFfX5_-CbAU0x3JHx43bmax8Cks9vgkak1hwX74ybjOIRCB2oqlrxXYhbAh07eM_krQeUTI1b5QQU5zk--cARcqaIrDKurdWs-uvzjoJk-pH5bvDaS7uH970RKiwpaTctntZbyO4fU2dqkXKgZQCZ5lR6cAAbOMHoU5QcCZdcwowuJrdVcbQVIYOCksvQwc_UDg-HQWjfSy-3-6_ZixmPhM")' }}
              ></div>
              <p className="text-sm font-bold">Bebidas</p>
            </button>
            <button className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-gray-500 dark:text-gray-400 gap-2 pb-3 pt-2 shrink-0">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 grayscale-[0.5] opacity-80"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBPouGNBQXpK9h0mS74PUwm9tmVklSanBw58n8MjpQxnVSogm93Bm5Lh0ohxktE82-aNOjEi6sXEElO6nuofTMlroHAdTZphx_wnM73kaAnOZCMv36VyS472dOpoNxHVBKSXjVUqj-sUbq5yu9a2DbjjNj6CT4sDvobdD1PGpuZUctNTJLkLdvIJfNgIfIAhAbxzHkgBGuFDJL0BZWbnsO06sSy5KRj1O669ApvsZxr6rdd59dLUn5-qWKy2x7BkFhJZYZB6xNXDyQ")' }}
              ></div>
              <p className="text-sm font-bold">Doces</p>
            </button>
          </div>
        </div>

        {/* Cabeçalho da Seção */}
        <div className="flex items-center justify-between px-4 pt-6 pb-2">
          <h3 className="text-[#181111] dark:text-white text-xl font-bold tracking-tight">Pizzas Populares</h3>
          <span className="text-primary text-sm font-medium cursor-pointer">Ver todas</span>
        </div>

        {/* Lista de Produtos Vertical */}
        <div className="flex flex-col px-4 gap-4">
          {/* Produto 1 */}
          <Card
            className="flex gap-4 p-3"
            onClick={() => navigate('/personalizar-pizza')}
          >
            <div
              className="size-24 bg-center bg-no-repeat bg-cover rounded-lg shrink-0"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBSIN0TM7w7rVclVTJLlCLESyk8ozrpYXXIwg5RDhdmuLXsA1-lZs15QmFOG_ggFqg1sP4nBoV1mokSNzBJUuDjYzEEBKYrXsbdo4sfnWpDQ6y_HYUMPNrV2UVWPllEfVDfSTa_Ym_JyhYZOyuipz-HiuUF_LhwUWGL2Jupgg75cHZYtgiK7WCt6ZzXkfUnIpwN_yL8CNnWJuLt2jMZZMo32luxHOeIkIEOwxsCusyKXFCSaMOFERJ0vxb1MR0Mb5BCdnXt-L1aoBA")' }}
            ></div>
            <div className="flex flex-col justify-between flex-1 py-0.5">
              <div>
                <h4 className="text-[#181111] dark:text-white font-bold text-base leading-tight">Margherita Clássica</h4>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 line-clamp-2">Molho de tomate pelati, mozzarella de búfala, manjericão fresco e azeite.</p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-primary font-bold text-lg">R$ 45,90</span>
                <button className="bg-primary text-white size-8 rounded-full flex items-center justify-center shadow-lg shadow-primary/20 active:scale-90 transition-transform">
                  <span className="material-symbols-outlined text-xl">add</span>
                </button>
              </div>
            </div>
          </Card>

          {/* Produto 2 */}
          <Card className="flex gap-4 p-3">
            <div
              className="size-24 bg-center bg-no-repeat bg-cover rounded-lg shrink-0"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC8xmvQ19rWExr8erHVkna9PZQqtXA_YesRpJmGdu1ftiQBur0kTjAdghCXTvGkixUnLVo5s3j2qzd15gN4SiaPw_H85vWizRoh4HLk_hf9sN3Fl0n2cjaWdFpSXzCgLBuN_T38ml2QfNLjYcQT_wbW3jyQDd_6gI5Oxp4A1dnBtDfWzkP7BGxSAHWJg_RSYXO4kk5oNoptDoApSS3tu-xjKJlyO26Wf5HJXqJeTjPQGZwHr1M-NHYadJm3At7vQQmc_hyq6xS_Hg0")' }}
            ></div>
            <div className="flex flex-col justify-between flex-1 py-0.5">
              <div>
                <h4 className="text-[#181111] dark:text-white font-bold text-base leading-tight">Pepperoni Especial</h4>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 line-clamp-2">Mozzarella, pepperoni artesanal crocante e orégano chileno.</p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-primary font-bold text-lg">R$ 52,90</span>
                <button className="bg-primary text-white size-8 rounded-full flex items-center justify-center shadow-lg shadow-primary/20 active:scale-90 transition-transform">
                  <span className="material-symbols-outlined text-xl">add</span>
                </button>
              </div>
            </div>
          </Card>
        </div>
      </main>

      {/* Barra de Carrinho Flutuante */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md px-4 z-50">
        <button
          onClick={() => navigate('/finalizar-pedido')}
          className="w-full h-14 bg-primary text-white rounded-xl shadow-2xl flex items-center justify-between px-6 transition-transform active:scale-95"
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined">shopping_basket</span>
            <span className="font-bold">Ver Carrinho</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs text-white/80 leading-none">2 itens</span>
            <span className="text-lg font-bold">R$ 98,80</span>
          </div>
        </button>
      </div>

      {/* Espaçamento para área segura (iOS) */}
      <div className="h-8 bg-background-light dark:bg-background-dark"></div>
    </div>
  );
};

export default HomeCardapio;
