namespace HBI.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'HBI.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
}

