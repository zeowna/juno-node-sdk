/**
 * Payment Status Enum
 *
 * @see https://www.boletobancario.com/boletofacil/integration/integration.html#payment_status
 */
export enum PaymentStatus {
  /**
   * Pagamento autorizado (Aguardando confirmação)
   */
  AUTHORIZED = 'AUTHORIZED',
  /**
   * Pagamento rejeitado pela análise de risco.
   */
  DECLINED = 'DECLINED',
  /**
   * Pagamento não realizado
   */
  FAILED = 'FAILED',
  /**
   * Pagamento não autorizado pela instituição responsável pelo cartão de crédito
   */
  NOT_AUTHORIZED = 'NOT_AUTHORIZED',
  /**
   * Pagamento confirmado
   */
  CONFIRMED = 'CONFIRMED',
}
