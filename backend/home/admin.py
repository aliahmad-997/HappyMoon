from django.contrib import admin
from .models import *


class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('name', 'gender', 'address', 'houseNo')
    list_filter = ['user', ]
    search_fields = ('user', 'name', 'address', 'houseNo')


class EmployeePhotoAdmin(admin.ModelAdmin):
    list_display = ('profile', 'profile_image', )
    list_filter = ['profile', ]
    search_fields = ('profile', )


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', )
    list_filter = ['name', ]
    search_fields = ('name', )


class SubscriptionAdmin(admin.ModelAdmin):
    list_display = ('name', 'price')
    list_filter = []
    search_fields = ('name', 'price')


class EmployeeSubscriptionAdmin(admin.ModelAdmin):
    list_display = ('employee', 'subscription')
    list_filter = ['employee', ]
    search_fields = ('employee', 'subscription')


class ReviewAdmin(admin.ModelAdmin):
    list_display = ('employee', 'user', 'comments', 'rating')
    list_filter = ['employee', 'user']
    search_fields = ('employee', 'user')


class BookingRequestAdmin(admin.ModelAdmin):
    list_display = ('employee', 'date_time', 'user', 'category', 'address', 'city')
    list_filter = ['employee', 'user']
    search_fields = ('employee', 'user')


admin.site.register(Employee, EmployeeAdmin)
admin.site.register(EmployeePhoto, EmployeePhotoAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Subscription, SubscriptionAdmin)
admin.site.register(EmployeeSubscription, EmployeeSubscriptionAdmin)
admin.site.register(Review, ReviewAdmin)
admin.site.register(BookingRequest, BookingRequestAdmin)
