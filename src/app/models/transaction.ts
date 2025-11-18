export interface TransactionModel {
  id: number;
  user_id: number;
  type: 'topup' | 'buy' | 'sell';
  amount: number;
  gold_grams: number;
  price_per_gram: number;
  status: string;
  reference_id: string;
  created_at: string;
  updated_at: string;
}

export interface TransactionResponse {
  data: TransactionModel[];
  message: string;
}